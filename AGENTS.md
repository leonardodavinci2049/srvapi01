# AGENTS.md — srvapi01

NestJS 11 multi-tenant B2B REST API over MySQL/MariaDB using **raw SQL + Stored Procedures (no ORM)**.
Most conventions are documented in `README.md`; this file captures what is easy to get wrong.

## Commands

```bash
pnpm install            # package manager is pnpm (declared in package.json)
pnpm run dev            # nest start --watch (needs a reachable DB + valid .env)
pnpm run build          # typecheck + compile to dist/ (there is NO separate typecheck script)
pnpm run lint           # ESLint with --fix (type-aware, rewrites files)
pnpm run lint:check     # same lint, no fixes
pnpm run format         # Prettier write (single quotes, trailingComma all)
pnpm run format:check   # Prettier check only
```

> **No tests are implemented.** This app has no unit/integration test coverage — don't rely on a test suite for verification and don't assume specs exist for new code.

Verification order before opening a PR: `pnpm run build && pnpm run format && pnpm run lint`.

## Git flow (non-standard — easy to get wrong)

- Branch from `develop` as `feature/featr-NNN` (e.g. `feature/featr-600`).
- Releases are `rls-NNN`. Finalize a feature with `scripts/git-flow-release.sh`:
  finishes the feature, starts/finishes `rls-NNN`, pushes `main` + `develop` + tags, then opens `feature/featr-(NNN+1)`. Requires `git flow` configured.
- Semantic commit prefixes: `feat:`, `fix:`, `refactor:`, `docs:`, `chore:`.

## Gitignored but present locally

`.gitignore` excludes these, so they exist in the working copy but are **never committed** — don't add them to commits and don't expect them in a fresh clone:

- `.env` — required to run/validate; missing it crashes the app at boot.
- `scripts/` — `git-flow-release.sh`, `generate-schema.mjs`, `commands.md`.
- `API-documentation/`, `docs/`, `database-docs/`, `.github`, `.agents/`.

`database-objects` at the repo root is a **symlink to a sibling project** (`erp-database-analysis-project/database-objects`), not part of this repo.

## Environment & startup

- Vars are validated with **Zod** at boot in `src/core/config/envs.ts` — invalid/missing `.env` throws and the app exits. Required: `APP_API_URL`, `APP_SWAGGER_URL`, `APP_JWT_SECRET`, `APP_PORT`, `API_KEY`, `DATABASE_*`.
- `main.ts` listens on `process.env.APP_PORT ?? 3000`; global prefix is `/api`.
- `ValidationPipe` runs with `whitelist`, `forbidNonWhitelisted`, `transform`, and **`enableImplicitConversion: true`** — DTO scalar types are coerced implicitly.
- `ThrottlerGuard` is registered globally (`APP_GUARD`); current limit is `50000` per 60s in `app.main/app.module.ts`.

## Architecture rules (follow exactly)

- **No ORM/Prisma.** All DB access goes through `src/database/database.service.ts`:
  `selectExecute` / `selectQuery` (reads), `ModifyExecute` / `ModifyQuery` (writes), `runInTransaction` for multi-statement work. Cast SP rows with `as unknown as T`; row interfaces extend `mysql2` `RowDataPacket`.
- **Multi-tenancy is mandatory:** every query/SP call must include `pe_system_client_id` and `pe_store_id`.
- Process SP results via helpers in `src/core/procedure.result/` (`processProcedureResultMutation`, `processProcedureResultMultiQuery`). Services return `ResultModel` (`src/core/utils/result.model.ts`) with codes from `src/core/utils/constants/globalConstants` (e.g. `100200` success, `100404` not found, `100422` process failed). Wrap service bodies in try/catch.
- Feature module layout: `controller -> service -> query -> dto -> types`. `query/*` are pure functions that return the `CALL sp_...` string.
- Naming: files `kebab-case`; controller method `<feature><Action>V2`; service method `task<Feature><Action>V2`; SPs `sp_*_v2`; table/param prefixes `tbl_*` / `pe_*`.
- Business routes are `@Post('v2/...')` guarded by `@UseGuards(AuthGuard)`; API key via `Authorization: Bearer <API_KEY>` or `x-api-key`.
- **Register every new module** in the `imports` array of `src/app.main/app.module.ts` — this is the one step most easily forgotten.
- Imports: absolute `src/core/...`, `src/database/...` for shared code; relative within a module. `tsconfig` uses `module: nodenext`, `baseUrl: ./`, `strict: false` but **`strictNullChecks: true`**.

## Generated DB schema

`node scripts/generate-schema.mjs` connects using `.env` and dumps `SHOW CREATE TABLE` per table into `database-objects/schemas/` (follows the symlink above).

## OpenCode skills (auto-loaded, prefer over hand-rolling)

- `access-development-database` — any DB query/DDL via the `mariadb` client, gated to `APP_ENVIRONMENT=development`, password via `MYSQL_PWD`.
- `generate-endpoint-documentation` — generating per-endpoint Markdown under `API-documentation/<module>/` from `@Post` controllers.
- `src/brand/AGENTS.md` is a good per-module instruction template to mirror for new modules.
