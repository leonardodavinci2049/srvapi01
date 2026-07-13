# AGENTS.md — srvapi01

> Guidance for AI coding agents working in this repository.
> Read this fully before making changes.

---

## Project Overview

**srvapi01** is a multi-tenant **wholesale / B2B e-commerce REST API** built with NestJS 11 and TypeScript. It exposes versioned business endpoints for catalog management, shopping cart, customers, carriers, and the full order lifecycle — all backed by a MySQL/MariaDB database using **raw SQL and Stored Procedures** (no ORM).

---

## Tech Stack

| Layer          | Technology                                              |
| -------------- | ------------------------------------------------------ |
| Runtime        | Node.js `>= 20`                                        |
| Language       | TypeScript (target `ES2023`, `nodenext` modules)       |
| Framework      | NestJS 11                                              |
| Database       | MySQL / MariaDB (`mysql2`)                             |
| Data access    | Raw SQL + Stored Procedures (**no Prisma / no ORM**)   |
| Validation     | `class-validator`, `class-transformer`                 |
| API docs       | `@nestjs/swagger`                                      |
| Config         | `@nestjs/config` + `zod`                               |
| Rate limiting  | `@nestjs/throttler`                                    |
| Package manager| `pnpm`                                                 |
| Testing        | Jest (`ts-jest`)                                       |
| Linting        | ESLint (flat config) + Prettier                        |

---

## Commands

```bash
# Dependencies
pnpm install

# Development
pnpm run dev              # nest start --watch

# Build & production
pnpm run build            # nest build → dist/
pnpm run start:prod       # node dist/main

# Lint & format
pnpm run lint             # ESLint with --fix
pnpm run format           # Prettier (single quotes, trailing commas)

# Testing (scripts exist, but tests are not actively used in this project)
pnpm run test             # Jest unit tests
pnpm run test:watch       # Watch mode
pnpm run test:cov         # Coverage report
pnpm run test -- src/path/to/file.spec.ts   # Single file
pnpm run test:e2e         # End-to-end (test/jest-e2e.json)
```

> **Before committing:** ensure `pnpm run lint` and `pnpm run format` pass.
> Tests are not part of the workflow — only the default Jest boilerplate exists.

---

## Project Structure

```
srvapi01/
├── src/
│   ├── app.main/             # Root module, health/info controller, bootstrap
│   ├── main.ts               # Entry point (global prefix /api, ValidationPipe, CORS)
│   ├── core/                 # Shared kernel
│   │   ├── config/           # Zod-validated env vars (envs.ts)
│   │   ├── guards/           # AuthGuard (API key), RoleGuard
│   │   ├── decorators/       # @Roles, @ParamId, @UserId
│   │   ├── interceptors/
│   │   ├── middlewares/
│   │   ├── enums/            # RoleEnum
│   │   ├── procedure.result/ # SP result processors (see below)
│   │   ├── procedures/
│   │   └── utils/            # ResultModel, RESPONSE_CODES, MESSAGES, helpers
│   ├── database/             # DatabaseService (pool, execute/query, transactions)
│   └── <feature>/            # Feature modules (30+ domains)
├── database-objects/         # SP schemas & stored-procedure .sql files
├── API-documentation/        # Per-endpoint Markdown docs
├── scripts/                  # git-flow-release.sh, generate-schema.mjs
├── pageroot/                 # Static assets served at /
├── test/                     # E2E tests
├── .agents/skills/           # Agent skills (see below)
├── nest-cli.json
├── tsconfig.json
└── package.json
```

### Feature module layout

Every feature module (`src/<feature>/`) follows the same structure:

```
src/<feature>/
├── <feature>.module.ts       # @Module wiring (imports DatabaseModule)
├── <feature>.controller.ts   # @Post('v2/...') endpoints, @UseGuards(AuthGuard)
├── <feature>.service.ts      # task<Feature><Action>V2 — orchestration + try/catch
├── dto/                      # *-v2.dto.ts — @ApiProperty + class-validator
├── query/                    # *-v2.query.ts — pure functions returning SP call strings
├── types/                    # *.type.ts — interfaces extending RowDataPacket
└── entities/                 # (optional) entity interfaces
```

### Feature domains

| Domain         | Modules                                                                                                          |
| -------------- | ---------------------------------------------------------------------------------------------------------------- |
| Catalog        | `product`, `product-base`, `product-pdv`, `product-web`, `product-inline`, `product-update`, `physical_product`, `product-manager` |
| Taxonomy       | `taxonomy`, `taxonomy-base`, `taxonomy-inline`, `taxonomy-rel`, `taxonomy-web`                                   |
| Reference data | `brand`, `ptype`, `supplier`, `carrier`                                                                          |
| Commerce       | `cart`, `customer`, `customer-inline`, `customer-upd`                                                            |
| Orders         | `order-items`, `order-operation`, `order-reports`, `order-sales`, `order-upd`, `order-b2b`                       |
| Platform       | `account`, `check`, `general-call`, `system`                                                                     |

---

## Architecture & Request Flow

```
HTTP POST /api/<feature>/v2/<action>
    │
    ▼
Controller (@UseGuards(AuthGuard))
    │  validates body via DTO (class-validator + ValidationPipe)
    ▼
Service (task<Feature><Action>V2)
    │  builds query string, calls DatabaseService, maps ResultModel
    ▼
Query (pure function)
    │  returns `CALL sp_<feature>_<action>_v2(...)` string
    ▼
DatabaseService.selectExecute / ModifyExecute
    │  mysql2 connection pool → MariaDB
    ▼
ResultModel { statusCode, message, recordId, data, quantity, errorId }
```

### Bootstrap (`src/main.ts`)

- Global route prefix: **`/api`**
- `ValidationPipe` with `whitelist`, `forbidNonWhitelisted`, `transform`, and `enableImplicitConversion`.
- CORS enabled for all origins.
- `ThrottlerGuard` registered globally (50000 req / 60s).

---

## Code Conventions

### Naming

| Element              | Convention              | Example                          |
| -------------------- | ----------------------- | -------------------------------- |
| Files                | `kebab-case`            | `brand-find-all-v2.dto.ts`       |
| Classes              | `PascalCase`            | `BrandService`                   |
| Service methods      | `task<Feature><Action>V2` | `taskBrandFindAllV2`           |
| Controller methods   | `<feature><Action>V2`   | `brandFindAllV2`                 |
| SP call functions    | `<Feature><Action>V2Query` | `BrandFindAllV2Query`         |
| DB tables            | `tbl_*`                 | `tbl_brand`                      |
| Stored procedures    | `sp_*_v2`               | `sp_brand_find_all_v2`           |
| SP parameters (DTO)  | `pe_*`                  | `pe_system_client_id`            |
| SP local variables   | `ol_*`                  | `olSystemClientId`               |
| SP feedback columns  | `sp_*`                  | `sp_return_id`, `sp_error_id`    |

### Imports

Order: NestJS → third-party → absolute internal (`src/core/...`, `src/database/...`) → relative (`./dto/...`, `../query/...`).

```typescript
import { Injectable } from '@nestjs/common';
import { RowDataPacket } from 'mysql2';

import { DatabaseService } from 'src/database/database.service';
import { ResultModel } from 'src/core/utils/result.model';

import { BrandFindAllV2Dto } from './dto/brand-find-all-v2.dto';
import { BrandFindAllV2Query } from './query/brand-find-all-v2.query';
```

### Formatting (Prettier)

- Single quotes, trailing commas, semicolons required.
- Config in `.prettierrc`. ESLint integrates Prettier via `eslint-plugin-prettier`.

### TypeScript

- `target: ES2023`, `module: nodenext`.
- `strict: false` but `strictNullChecks: true`.
- Use definite assignment (`!`) on DTO properties.
- `no-explicit-any` is **off**; `no-floating-promises` and `no-unsafe-argument` are **warn**.

---

## Database Access Patterns

### DatabaseService (`src/database/database.service.ts`)

```typescript
// SELECT (parameterized — safe from injection)
const rows = (await db.selectExecute<TblRow[]>(
  queryString,
  params,
)) as unknown as TblRow[];

// INSERT / UPDATE / DELETE
const result = await db.modifyExecute(queryString, params); // → ResultSetHeader

// Stored procedure returning multiple result sets
const sets = await db.chamarProcedimento<TblRow>(spName, params);

// Transaction
await db.runInTransaction(async (conn) => {
  await conn.execute('UPDATE ...', params);
  await conn.execute('INSERT ...', params);
});
```

### Key rules

- **Strictly no Prisma / no ORM.** All data access goes through `DatabaseService` with raw SQL or Stored Procedures.
- **Cast DB results explicitly:** `(await db.selectExecute(...)) as unknown as T[]`.
- **Define row interfaces** extending `RowDataPacket` from `mysql2` in each module's `types/` folder.
- **Multi-tenancy:** every query/SP call MUST include `pe_system_client_id` and `pe_store_id`.
- **Query functions are pure** — they receive a DTO and return a SQL string. No DB calls inside `query/` functions.

### Stored Procedure result processing

Helpers in `src/core/procedure.result/`:

| Function                              | Use when…                                                         |
| ------------------------------------- | ----------------------------------------------------------------- |
| `processProcedureResultQuery<T>`      | SP returns `[data[], feedback[]]` (single result set with `id`)   |
| `processProcedureResultQueryWithoutId<T>` | SP returns `[data[], feedback[]]` (no `id` field on rows)     |
| `processProcedureResultMultiQuery`    | SP returns multiple named result sets + feedback                  |
| `processProcedureResultMutation`      | SP returns `[feedback[]]` for create/update/delete                |

All return a `ResultModel`. The feedback row (`SpDefaultFeedback`) carries `sp_return_id`, `sp_message`, and `sp_error_id`.

---

## Error Handling

- Services **must** wrap logic in `try/catch`.
- On error, return `new ResultModel(RESPONSE_CODES.NOT_FOUND, errorMessage, 0, [])`.
- SPs signal errors via `sp_error_id` (non-zero). The result processors map this automatically.

### Response codes (`src/core/utils/constants/globalConstants.ts`)

| Code   | Constant               | Meaning                        |
| ------ | ---------------------- | ------------------------------ |
| 100200 | `SUCCESS`              | Success                        |
| 100404 | `NOT_FOUND`            | Resource not found             |
| 100422 | `PROCESSING_FAILED`    | Could not process              |
| 100401 | `UNAUTHORIZED`         | Authentication failed          |
| 100403 | `FORBIDDEN`            | Access denied                  |
| 100500 | `INTERNAL_ERROR`       | Server error                   |

---

## Security

- **All business endpoints** MUST use `@UseGuards(AuthGuard)`.
- `AuthGuard` validates an API key from `Authorization: Bearer <key>` or `x-api-key` header.
- The key is stored in `API_KEY` env var, validated by Zod at boot.
- `RoleGuard` + `@Roles(...)` decorator for role-based access when needed.
- Never log or expose secrets, API keys, or passwords.

---

## Adding a New Endpoint (v2 pattern)

Follow these steps in order:

1. **DTO** — Create `src/<feature>/dto/<feature>-<action>-v2.dto.ts` with `@ApiProperty` + `class-validator` decorators. Include a sample JSON comment for testing.
2. **Types** — Add row interfaces (extending `RowDataPacket`) and SP result types in `src/<feature>/types/<feature>.type.ts`.
3. **Query** — Create `src/<feature>/query/<feature>-<action>-v2.query.ts` as a pure function returning the `CALL sp_<feature>_<action>_v2(...)` string.
4. **Service** — Add `task<Feature><Action>V2(dto)` in `<feature>.service.ts`. Inject `DatabaseService`, call the query function, process the result with the appropriate `processProcedureResult*` helper, wrap in `try/catch`.
5. **Controller** — Add `@UseGuards(AuthGuard)` + `@Post('v2/<feature>-<action>')` in `<feature>.controller.ts`, delegating to the service.
6. **Module** — Ensure the module imports `DatabaseModule` and registers the controller + service.
7. **Test** — Verify with the `test-controller-endpoints` skill.

---

## Environment Variables

All validated with `zod` at startup (`src/core/config/envs.ts`). The app fails fast if any are missing.

| Variable            | Description                        |
| ------------------- | ---------------------------------- |
| `APP_PORT`          | HTTP server port (default 3000)    |
| `APP_API_URL`       | Public base URL                    |
| `APP_SWAGGER_URL`   | Swagger UI URL                     |
| `APP_JWT_SECRET`    | JWT signing secret                 |
| `API_KEY`           | API key for `AuthGuard`            |
| `DATABASE_HOST`     | MySQL/MariaDB host                 |
| `DATABASE_PORT`     | MySQL/MariaDB port                 |
| `DATABASE_USER`     | DB user                            |
| `DATABASE_PASSWORD` | DB password                        |
| `DATABASE_NAME`     | Database/schema name               |

---

## Testing

> **Tests are not part of the workflow** — only the default Jest boilerplate exists (`app.controller.spec.ts`, `database.service.spec.ts`, `app.e2e-spec.ts`). The scripts are wired up but not actively used.

- Jest is configured: unit specs next to source (`*.spec.ts`, `rootDir: src`), E2E in `test/` (`jest-e2e.json`).
- For validating endpoints, use the **`test-controller-endpoints`** skill instead of unit tests — it exercises real POST endpoints via curl and generates a Markdown report.
- Controller DTOs include sample JSON comments for manual `curl` testing.

---

## Agent Skills

This repo ships with specialized skills in `.agents/skills/`:

| Skill                            | Purpose                                                        |
| -------------------------------- | ------------------------------------------------------------- |
| `test-controller-endpoints`      | Test POST endpoints via curl + generate Markdown report       |
| `generate-endpoint-documentation`| Generate API docs for `@Post` controller methods              |
| `save-stored-procedure`          | Deploy a MariaDB stored procedure from a `.sql` file          |

Use these proactively when the task matches.

---

## Git & Commit Conventions

- Follow **Git Flow**: branch from `develop` as `feature/<description>`.
- Semantic commit prefixes: `feat:`, `fix:`, `refactor:`, `docs:`, `chore:`.
- **Never commit** unless explicitly asked.
- **Never commit secrets** or the `.env` file.

---

## Critical Constraints (Do / Don't)

### Do

- Filter every query by `pe_system_client_id` and `pe_store_id` (multi-tenancy).
- Use absolute imports (`src/core/...`, `src/database/...`) for shared code.
- Guard business endpoints with `@UseGuards(AuthGuard)`.
- Keep query functions pure (no side effects, no DB calls).
- Process SP results through `src/core/procedure.result/` helpers.
- Run `pnpm run lint && pnpm run format` before considering work complete.

### Don't

- **Don't** use Prisma or any ORM.
- **Don't** add comments unless explicitly asked.
- **Don't** introduce new dependencies without checking `package.json` first.
- **Don't** hardcode credentials, API keys, or connection strings.
- **Don't** skip the `try/catch` in service methods.
- **Don't** use `GET` for business logic endpoints — all use `POST` with a JSON body.
