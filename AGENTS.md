# AGENTS.md — srvapi01

NestJS 11 multi-tenant B2B REST API over MySQL/MariaDB using **raw SQL + Stored Procedures (no ORM)**.
General conventions are in `README.md` — except linting: README says ESLint/Prettier, but the repo actually uses **Biome** (`package.json`, `biome.json`). This file captures what is easy to get wrong.

## Commands

```bash
pnpm install            # package manager is pnpm (packageManager: pnpm@11.10.0)
pnpm run dev            # nest start --watch (needs a reachable DB + valid .env)
pnpm run build          # typecheck + compile to dist/ (there is NO separate typecheck script)
pnpm run lint           # Biome lint with fixes (rewrites files); lint:check = read-only
pnpm run format         # Biome format write (single quotes, trailing commas); format:check = read-only
pnpm run test           # Jest unit tests (rootDir src, *.spec.ts)
pnpm run test -- <path/to/file.spec.ts>   # single test file
pnpm run test:e2e       # test/*.e2e-spec.ts (separate config)
```

Test coverage is minimal (only `src/app.main/app.controller.spec.ts` and `src/database/database.service.spec.ts`) — don't rely on a test suite for verification and don't assume specs exist for feature modules.

Verification order before finishing: `pnpm run build && pnpm run format && pnpm run lint` (or the `:check` variants).

## Git flow (non-standard — easy to get wrong)

- Branch from `develop` as `feature/featr-NNN` (e.g. `feature/featr-600`).
- Releases are named `rls-NNN`. Finish with `scripts/git-flow-release.sh` (requires the `git flow` extension): finishes the feature, starts/finishes release `rls-<N-or-name>`, pushes `main` + `develop` + tags, leaves you on `develop`. Refuses to run with uncommitted changes.
- Semantic commit prefixes: `feat:`, `fix:`, `refactor:`, `docs:`, `chore:`.

## Gitignored but present locally

`.gitignore` excludes these, so they exist in this working copy but are **never committed** — don't add them and don't expect them in a fresh clone:

- `.env` — required to run/validate; missing/invalid vars crash the app at boot (Zod validation in `src/core/config/envs.ts`).
- `scripts/` (`git-flow-release.sh`, `generate-schema.mjs`, `commands.md`), `docs/`, `API-documentation/`, `.agents/`, `ecosystem.config.js`, `/stored-procedures`, `/schemas`, `/database-docs`, `/docs-database`, `/upload`, `/flow`, `/json-response`.

`database-objects` at the repo root is a **symlink to the sibling repo `../erp-database-sql-procedures`** (SP definitions, schemas) — not part of this repo.

## Environment, startup & ops

- Required env vars (Zod, fail-fast): `APP_API_URL`, `APP_SWAGGER_URL`, `APP_JWT_SECRET`, `APP_PORT`, `API_KEY`, `DATABASE_HOST/PORT/USER/PASSWORD/NAME`. Others (`APP_ENVIRONMENT`, `APP_HOST_API`) pass through as optional.
- `src/main.ts`: global prefix `/api`; listens on `APP_PORT ?? 3000`. `ValidationPipe` runs with `whitelist`, `forbidNonWhitelisted`, `transform` and **`enableImplicitConversion: true`** — DTO scalars are coerced implicitly.
- `ThrottlerGuard` is global (`APP_GUARD`): 50000 req / 60s (`src/app.main/app.module.ts`).
- Production process runs under PM2: app name `server01` → `pm2 start ecosystem.config.js --only server01` (fork mode, `npm start`).
- `node scripts/generate-schema.mjs` dumps `SHOW CREATE TABLE` per table into `database-objects/schemas/` using `.env` DB creds (destructive: wipes existing `.sql`/`.md` there first).

## Architecture rules (follow exactly)

- **No ORM/Prisma.** All DB access goes through `src/database/database.service.ts`:
  `selectExecute` / `selectQuery` (reads), `ModifyExecute` / `ModifyQuery` (writes), `runInTransaction` for multi-statement work. Cast SP rows with `as unknown as T`; row interfaces extend `mysql2` `RowDataPacket`.
- **Multi-tenancy is mandatory:** every query/SP call must include `pe_system_client_id` and `pe_store_id`.
- Process SP results via helpers in `src/core/process-result/` (`processProcedureResultMutation`, `processProcedureResultQuery[WithoutId]`, `processProcedureResultMultiQuery`). Services return `ResultModel` with codes from `src/core/utils/constants/globalConstants.ts` (e.g. `100200` success, `100404` not found, `100422` process failed). Wrap service bodies in try/catch.
- Feature module layout: `controller -> service -> query -> dto -> types`. `query/*` are pure functions returning the `CALL sp_...` string + params array — never interpolate values into SQL.
- Naming: files `kebab-case`; controller method `<feature><Action>V2`; service method `task<Feature><Action>V2`; SPs `sp_*_v2`; tables `tbl_*`; SP params `pe_*`.
- Business routes are `@Post('v2/...')` guarded by `@UseGuards(AuthGuard)`; API key via `Authorization: Bearer <API_KEY>` or `x-api-key` header.
- **Register every new module** in the `imports` array of `src/app.main/app.module.ts` — the step most easily forgotten.

## Endpoint workflows (local-only, gitignored)

- `.agents/skills/` contains skills that encode the team workflow — use them: `create-procedure-endpoint` (new SP endpoint), `test-controller-endpoints` (curl tests + report), `generate-endpoint-documentation` (docs under `API-documentation/<module>/`), `access-development-database` (dev DB via `.env`), `refine-task-prompt`, `safe-dependency-update`.
- `docs/initial-prompt/base-prompt-v2.md` is the authoritative contract for creating procedure endpoints (pre-execution questionnaire → DTO with sample JSON comment → parametrized query → typed result sets → service/controller → build/format/lint → real HTTP test → docs).
- Generated artifacts (questions, reports, endpoint docs) are written in **Brazilian Portuguese**; commit messages use English semantic prefixes.
- Never expose or commit `API_KEY` or `.env` contents; mask keys in generated docs/tests.
