# AGENTS.md — srvapi01

## Language

- Code, comments, error messages, documentation, and file names: US English.
- User-facing messages, labels, and interface text: Brazilian Portuguese (Brazilian audience).
- A closer `AGENTS.md`/`AGENTS.override.md` may supplement or override these rules; read the most specific instructions first.

## Project overview

`srvapi01` is a multi-tenant B2B REST API: NestJS 11, TypeScript (`nodenext`), MySQL/MariaDB via raw SQL and Stored Procedures with `mysql2` — no ORM. `package.json`, `biome.json`, `tsconfig.json`, and executable code are sources of truth; treat `README.md` as supporting documentation and verify possibly outdated info in code. The legacy `tsconfig` keeps `strict: false` and `noImplicitAny: false` with `strictNullChecks: true`: do not introduce new `any` when `unknown`, generics, or domain types fit.

- Do not add dependencies, update versions, or introduce an ORM/Prisma without demonstrated need and user authorization.
- Prefer small changes compatible with existing contracts; do not turn a localized fix into a broad legacy refactor.

## Global behavior

- Global HTTP prefix: `/api`.
- Global `ValidationPipe`: `whitelist`, `forbidNonWhitelisted`, `transform`, `enableImplicitConversion`. Even with implicit conversion, validate external inputs in DTOs with `class-validator`.
- Required env variables are validated by Zod in `src/core/config/envs.ts`: `APP_API_URL`, `APP_SWAGGER_URL`, `APP_JWT_SECRET`, `APP_PORT`, `API_KEY`, and `DATABASE_HOST/PORT/USER/PASSWORD/NAME`.
- `ThrottlerGuard` is global. Do not weaken authentication, validation, CORS, or rate limiting without analyzing and documenting the impact.

## Commands

```bash
pnpm install
pnpm run dev
pnpm run build          # compile + type checking; no separate typecheck script
pnpm run format:check
pnpm run lint:check
pnpm run test           # single file: pnpm run test -- <path/to/file.spec.ts>
pnpm run test:e2e
```

- Prefer `:check` variants; `pnpm run format`/`lint` write to `src` and `test` — use write modes only on task-scope files and review the diff. `pnpm exec biome check` has broader scope than `pnpm run lint:check` and is not equivalent.
- `pnpm run dev`, E2E tests, and HTTP checks require a valid `.env` and usually a reachable database; do not confuse environment failure with code failure.
- Coverage is limited (two unit specs, one basic E2E spec); a green suite is not sole evidence of correctness.

## Architecture

```text
HTTP request -> controller -> service -> query -> DatabaseService
                                |           |
                                v           v
                         result helpers  MySQL/MariaDB
```

- Feature structure: `*.module.ts`, `*.controller.ts`, `*.service.ts`, `dto/`, `query/`, `types/`, plus `entities/` when the module has adopted it. Register every new business module in `src/app.main/app.module.ts`; import `DatabaseModule` in modules that use `DatabaseService`.
- Controllers handle HTTP and DTOs only — no SQL or business rules. Services orchestrate, call `DatabaseService`, process results, and handle exceptions without leaking stack traces or database details.
- DTOs are typed classes with `class-validator` validations matching the real contract; never rely only on TypeScript types for external data.
- Absolute `src/...` imports for shared resources; relative imports within the feature.

## Database and Stored Procedures

- All access via `src/database/database.service.ts`: `selectExecute`/`selectQuery` for reads, `ModifyExecute`/`ModifyQuery` for mutations, `runInTransaction` for atomic multi-step mutations, guaranteeing rollback and connection release on error.
- Queries are pure functions returning `queryString` + `queryParams`, with `?` placeholders for all values; never concatenate or interpolate DTO data into SQL. Legacy interpolated queries exist: do not copy them or migrate them broadly outside the requested scope.
- Tenant-bound operations must include and preserve `pe_system_client_id` and `pe_store_id`; never remove tenant filters or accept another tenant's identifiers without authorization validated by the contract.
- Before changing or exposing a procedure, verify signature, parameter order, types, result sets, and feedback. Local definitions: `database-objects -> ../erp-database-sql-procedures` symlink (separate repository).
- Model rows with interfaces extending `RowDataPacket`; for multi-result-set procedures define explicit tuples and limit `as unknown as ...` casts to the `mysql2` boundary.
- Reuse processors from `src/core/process-result/` and the `ResultModel` envelope; do not create another response format. For new code, reuse `RESPONSE_CODES` and `MESSAGES` from `src/core/utils/constants/globalConstants.ts` — no magic codes or messages. Preserve legacy patterns when migrating them is out of scope.
- No `DROP`, `TRUNCATE`, mass deletion, destructive DDL, migrations, or data corrections without explicit authorization. Before any database write, show the target and expected impact.

## HTTP contracts and security

- Business routes: `@Controller('<feature>')` + `@Post('v2/<action>')` → `/api/<feature>/v2/<action>`; protect with `@UseGuards(AuthGuard)` unless the existing contract explicitly defines a public route.
- `AuthGuard` accepts `Authorization: Bearer <API_KEY>` or `x-api-key`. Use the secret only during local execution and mask it in evidence; never expose `.env` values, keys, tokens, or passwords in commands, logs, docs, tests, or responses.
- Preserve compatibility of field names, types, codes, messages, quantity, `recordId`, and result-set structure for current consumers. Never return raw database messages, SQL containing data, credentials, or stack traces.
- Changes to authentication, authorization, CORS, limits, global validation, or public contracts require impact analysis and targeted tests.

## Naming

- Files: `kebab-case`. Classes/types: `PascalCase`. Variables/methods: `camelCase`.
- Controllers: `<feature><Action>V2`. Services: `task<Feature><Action>V2`. Stored Procedures: `sp_*_v2`. Tables: `tbl_*`. Procedure parameters: `pe_*`.
- Preserve legacy names required by database or API contracts; do not "correct" them for style.

## Git

- Check `git status --short --branch` and `git worktree list --porcelain` before starting any file-editing task and before proposing branch operations; preserve pre-existing changes and stay within task scope.
- Git flow is mandatory for every task that edits or creates repository files (code, docs, `AGENTS.md`, configs, tests — anything outside git-ignored paths), even when the user does not mention git: BEFORE the first edit, create a feature branch from `develop` — `feature/featr-NNN` when there is a task number, otherwise `feature/<short-kebab-slug>`. Only an explicit user instruction for that specific task may override this.
- Never edit, stage, or commit directly on `develop` or `main`. If the current branch is `develop` or `main` when a file-editing task starts, create the feature branch first: this branch creation is pre-authorized and does not count as a commit or push. If pre-existing uncommitted changes block the switch, stop and ask the user; never stash, move, discard, or overwrite the user's changes.
- Creating the feature branch does not authorize the remaining git operations: do not commit, push, merge, release, deploy, or change infrastructure without an explicit request.
- Commits: `feat:`, `fix:`, `refactor:`, `docs:`, `chore:`.
- `scripts/git-flow-release.sh` finishes feature/release and pushes `main`, `develop`, and tags: run only with explicit authorization, a clean tree, and prior review of the script.

## Local Git-ignored resources

Available on this machine but ignored (may not exist in another clone): `.env`, `.agents/`, `docs/`, `API-documentation/`, `scripts/`, `.github`, `stored-procedures/`, `schemas/`, `database-docs/`, `docs-database/`, `upload/`, `flow/`, `json-response/`, `ecosystem.config.js`.

- Use `.agents/skills/` when a task matches, reading the applicable `SKILL.md` first: `create-procedure-endpoint` (endpoint backed by a procedure; requires a saved pre-execution questionnaire and user answers), `test-controller-endpoints`, `generate-endpoint-documentation`, `access-development-database`, `safe-dependency-update`, `refine-task-prompt`.
- Generated artifacts follow the Language section unless a skill requires otherwise; report created paths without forcing them into Git.
- `node scripts/generate-schema.mjs` deletes existing SQL/Markdown files at the destination before regenerating: run only with explicit authorization and confirmed destination repository.

## Verification and delivery

- Proportional to risk: for code changes, run tests and Biome checks targeted at changed files first, then when applicable `pnpm run format:check`, `pnpm run lint:check`, `pnpm run build`, `pnpm run test`, and `git diff --check`.
- Add or update tests when changing relevant behavior. For endpoints, a successful build does not replace an authenticated HTTP test or validation against the actual procedure.
- Distinguish static validation, unit/E2E tests, HTTP tests against the development database, and production behavior. If a check fails due to a pre-existing issue or unavailable environment, record the command, error, and limitation; do not modify unrelated files to make it pass.
- Before finishing, review the task diff (`git diff -- AGENTS.md` when editing this file), confirm no secrets or accidental changes, and report what changed, changed files, commands run, and remaining work.