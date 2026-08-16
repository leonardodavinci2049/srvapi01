# AGENTS.md — srvapi01

# Language

The default development language is US English. Code comments, error messages, documentation, and file names should use English.
User-facing output messages, labels, and interface text should use Brazilian Portuguese because the project is intended for a Brazilian audience.

## Scope and purpose

These instructions apply to the entire repository. An `AGENTS.md` or
`AGENTS.override.md` closer to the file being changed may supplement or
override these rules; always read the most specific instructions before working
on a module.

`srvapi01` is a multi-tenant B2B REST API built with NestJS 11 and TypeScript.
Persistence uses MySQL/MariaDB through raw SQL and Stored Procedures with
`mysql2`; there is no ORM.

## Working rules

- Before editing, confirm the directory, branch, Git status, and relevant files.
  Preserve pre-existing changes and do not modify items outside the task scope.
- Before implementing, inspect the complete affected flow: controller, service,
  query, DTO, types, result helpers, NestJS module, and Stored Procedure.
- Treat `package.json`, `biome.json`, `tsconfig.json`, and executable code as
  sources of truth. Use `README.md` as supporting documentation and verify in
  code any information that may be outdated.
- Prefer small changes that remain compatible with existing contracts. Do not
  turn a localized fix into a broad legacy refactor.
- Do not add dependencies, update versions, or introduce an ORM/Prisma without
  demonstrated need and user authorization.
- Do not commit, push, merge, release, deploy, or change infrastructure without
  an explicit request.
- Never expose `.env` values, API keys, passwords, tokens, or sensitive data in
  commands, logs, documentation, tests, or responses.

## Stack and global behavior

- Node.js `>=20`, `pnpm@11.10.0`, NestJS 11, and TypeScript with `nodenext`
  modules.
- The global HTTP prefix is `/api`.
- The global `ValidationPipe` uses `whitelist`, `forbidNonWhitelisted`,
  `transform`, and `enableImplicitConversion`. Even with implicit conversion,
  validate external inputs in DTOs.
- Required variables are validated by Zod in `src/core/config/envs.ts`:
  `APP_API_URL`, `APP_SWAGGER_URL`, `APP_JWT_SECRET`, `APP_PORT`, `API_KEY`,
  and `DATABASE_HOST/PORT/USER/PASSWORD/NAME`.
- `ThrottlerGuard` is global. Do not weaken authentication, validation, CORS,
  or rate limiting without analyzing and documenting the impact.

## Project commands

```bash
pnpm install
pnpm run dev
pnpm run build
pnpm run format:check
pnpm run lint:check
pnpm run test
pnpm run test -- <path/to/file.spec.ts>
pnpm run test:e2e
```

- `pnpm run build` performs the compilation and type checking available in the
  project; there is no separate typecheck script.
- `pnpm run format` and `pnpm run lint` write fixes to `src` and `test`.
  Prefer the `:check` variants for diagnosis, and use `--write` only on files
  within the task scope, reviewing the diff afterward.
- `pnpm exec biome check` has a broader scope than `pnpm run lint:check` and
  is not equivalent to it. `pageroot` and the `database-objects` symlink are
  excluded by `biome.json`.
- `pnpm run dev`, E2E tests, and HTTP checks require a valid `.env` and
  usually a reachable database. Do not confuse an environment failure with a
  code failure.
- Automated coverage is limited: there are only two unit specs and one basic
  E2E spec. Do not use the current suite as the sole evidence of correctness.

## NestJS architecture

Business modules follow this pattern:

```text
HTTP request -> controller -> service -> query -> DatabaseService
                                |           |
                                v           v
                         result helpers  MySQL/MariaDB
```

- Organize each feature with `*.module.ts`, `*.controller.ts`,
  `*.service.ts`, `dto/`, `query/`, `types/`, and, when already adopted by
  the module, `entities/`.
- Controllers handle the HTTP protocol, receive DTOs, and delegate to services.
  Do not put SQL or business rules in controllers.
- Services orchestrate operations, call `DatabaseService`, process results,
  and handle exceptions without leaking stack traces or internal database
  details.
- DTOs must be typed classes with `class-validator` validations consistent
  with the actual contract. Do not rely only on TypeScript types for external
  data.
- Register every new business module in the `imports` array of
  `src/app.main/app.module.ts`, and import `DatabaseModule` in modules that use
  `DatabaseService`.
- Use absolute `src/...` imports for shared resources and relative imports
  within the feature itself, following the target module's pattern.
- The legacy `tsconfig` uses `strict: false` and `noImplicitAny: false` while
  keeping `strictNullChecks: true`. Preserve the distinction between optional,
  nullable, and required values; do not introduce new `any` types when
  `unknown`, generics, or domain types can represent the value.

## Database and Stored Procedures

- All database access goes through `src/database/database.service.ts`. Use
  `selectExecute`/`selectQuery` for reads, `ModifyExecute`/`ModifyQuery` for
  mutations, and `runInTransaction` when multiple operations must be atomic.
- New queries must be pure functions that return `queryString` and
  `queryParams`. Use `?` placeholders for all values; never concatenate or
  interpolate DTO data into SQL. Some legacy queries use interpolation: do not
  copy them or perform a broad migration outside the requested scope.
- Tenant-bound operations must include and preserve `pe_system_client_id` and
  `pe_store_id`. Never remove tenant filters or accept identifiers from another
  tenant without authorization validated by the contract.
- Before changing or exposing a procedure, verify its signature, parameter
  order, types, result sets, and feedback. Local definitions are available
  through the `database-objects -> ../erp-database-sql-procedures` symlink,
  which belongs to another repository.
- Model returned rows with interfaces that extend `RowDataPacket`. For
  procedure results with multiple result sets, define explicit tuples and limit
  `as unknown as ...` casts to the `mysql2` boundary.
- Reuse processors from `src/core/process-result/` and preserve the
  `ResultModel` envelope consumed by the endpoint. Do not create another
  response format or migrate legacy helpers unless the task requires it.
- For new code, reuse `RESPONSE_CODES` and `MESSAGES` from
  `src/core/utils/constants/globalConstants.ts`; do not introduce magic codes
  or messages. Preserve the module's legacy pattern when migrating it is outside
  the task scope.
- Use transactions for operations that require atomicity, and guarantee rollback
  and connection release on error paths.
- Do not execute `DROP`, `TRUNCATE`, mass deletion, destructive DDL,
  migrations, or data corrections without explicit authorization. Before any
  database write, show the target and expected impact.

## HTTP contracts and security

- Business routes follow `@Controller('<feature>')` with
  `@Post('v2/<action>')`, resulting in `/api/<feature>/v2/<action>`.
- Protect business endpoints with `@UseGuards(AuthGuard)` unless the existing
  contract explicitly defines a public route.
- `AuthGuard` accepts `Authorization: Bearer <API_KEY>` or the `x-api-key`
  header. Use the secret only during local execution and always mask it in
  evidence.
- Preserve compatibility for field names, types, codes, messages, quantity,
  `recordId`, and result-set structure for current consumers.
- Do not return raw database messages, complete SQL containing data,
  credentials, or stack traces to clients.
- Changes to authentication, authorization, CORS, limits, global validation, or
  public contracts require an impact analysis and targeted tests.

## Naming

- Files: `kebab-case`.
- Classes and types: `PascalCase`; variables and methods: `camelCase`.
- Controllers: `<feature><Action>V2`.
- Services: `task<Feature><Action>V2`.
- Stored Procedures: `sp_*_v2`; tables: `tbl_*`; procedure parameters:
  `pe_*`.
- Preserve legacy names required by database or API contracts. Do not "correct"
  them only for style.

## Local Git-ignored resources

The following resources are available on this machine but are ignored and may
not exist in another clone: `.env`, `.agents/`, `docs/`,
`API-documentation/`, `scripts/`, `.github`, `stored-procedures/`,
`schemas/`, `database-docs/`, `docs-database/`, `upload/`, `flow/`,
`json-response/`, and `ecosystem.config.js`.

- Use the skills in `.agents/skills/` when a task matches their scope, and read
  the applicable `SKILL.md` before acting.
- To create an endpoint backed by a procedure, use
  `create-procedure-endpoint`; its workflow requires a saved pre-execution
  questionnaire and the user's answers before implementation.
- To test controllers, generate documentation, access the database, or update
  dependencies, use `test-controller-endpoints`,
  `generate-endpoint-documentation`, `access-development-database`, and
  `safe-dependency-update`, respectively.
- Generated artifacts and documentation must follow the Language section unless
  an applicable local skill explicitly requires a different language. Report
  the created path, but do not force the artifact into Git.
- `node scripts/generate-schema.mjs` removes existing SQL/Markdown files from
  the destination before generating new schemas. Do not run this script without
  explicit authorization and confirmation of the destination repository.

## Git Flow

- Check `git status --short --branch` and `git worktree list --porcelain`
  before editing or proposing branch operations.
- Features branch from `develop` and, when there is a task number, follow
  `feature/featr-NNN`.
- Commits use semantic prefixes: `feat:`, `fix:`, `refactor:`, `docs:`,
  and `chore:`.
- Do not move, discard, overwrite, or stash the user's changes.
- The local `scripts/git-flow-release.sh` script finishes the feature,
  creates/finishes a release, pushes `main`, `develop`, and tags, and returns
  to `develop`. Run it only with explicit authorization, a clean tree, and
  prior review of the script.

## Verification and delivery

- Validate in proportion to risk. For code changes, first run tests and Biome
  checks targeted at the changed files; then run, when applicable:

```bash
pnpm run format:check
pnpm run lint:check
pnpm run build
pnpm run test
git diff --check
```

- Add or update tests when changing relevant behavior. For endpoints, a
  successful build does not replace an authenticated HTTP test or validation
  against the actual procedure.
- Clearly distinguish static validation, unit/E2E tests, HTTP tests against the
  development database, and behavior published to production.
- If a check fails because of a pre-existing issue or unavailable environment,
  record the command, error, and limitation; do not modify unrelated files to
  obtain a passing result.
- Before finishing, review `git diff -- AGENTS.md` or the task's complete diff,
  confirm there are no secrets or accidental changes, and report what changed,
  changed files, commands run, and remaining work.

## Code Review Rules

- Flag new SQL that interpolates values. Safe path: pass `?` placeholders and
  `queryParams` to `DatabaseService`.
- Flag tenant-bound operations missing `pe_system_client_id` and `pe_store_id`.
- Flag business endpoints without a validated DTO, `AuthGuard`, or module
  registration in `AppModule`.
- Flag incompatible changes to the response envelope, procedure parameter order,
  or result sets without a coordinated migration of consumers.
- Flag leaked secrets, SQL containing sensitive data, stack traces, or raw
  database errors.
- Flag dependent multi-step mutations without a transaction when partial failure
  could leave data inconsistent.
