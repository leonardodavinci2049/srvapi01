# AGENTS.md - srvapi01

This file provides critical guidance for agentic coding agents working on this repository.

## Build, Lint, and Test Commands

```bash
# Dependencies
pnpm install

# Development
pnpm run dev           # Watch mode (nest start --watch)

# Build
pnpm run build         # Production build (nest build)

# Production
pnpm run start:prod    # Run built app (node dist/main)

# Lint and Format
pnpm run lint          # ESLint with auto-fix
pnpm run format        # Prettier format

# Testing
pnpm run test                      # Run all unit tests
pnpm run test:watch                # Run tests in watch mode
pnpm run test -- <file_path>       # Run a single test file
pnpm run test:e2e                  # Run end-to-end tests
```

## Code Style Guidelines

### Import Organization

- **NestJS:** `@nestjs/...`
- **Third-party:** `mysql2`, `rxjs`, etc.
- **Internal (Absolute):** `src/core/...`, `src/database/...`
- **Relative:** `./dto/...`, `../query/...`

### Formatting (Prettier)

- Single quotes, trailing commas, semi-colons required.
- Run `pnpm run format` before every commit.

### Type Safety

- **Strictly No Prisma.** Use `DatabaseService` with raw SQL/Stored Procedures.
- Cast DB results: `(await db.selectExecute(...)) as unknown as T[]`.
- Define interfaces extending `RowDataPacket` from `mysql2` for database rows.

### Naming Conventions

- **Files:** `kebab-case` (e.g., `brand-find-all.dto.ts`).
- **Classes:** `PascalCase` (e.g., `BrandService`).
- **Methods:** `camelCase` with action prefix (`taskBrandFindAllV2`).
- **Variables:** `camelCase` for locals, `pe_*` for SP parameters.
- **Database:** `tbl_*` for tables, `sp_*_v2` for procedures.

### Architecture Patterns (v2)

- **DTOs:** Use `@ApiProperty` (Swagger) and `class-validator` decorators.
- **Queries:** Move raw SQL/SP calls to `query/` folder as pure functions.
- **Services:** Inject `DatabaseService`, call query functions, and handle results.
- **Controllers:** Use `@UseGuards(AuthGuard)`, `@Post('v2/...')` for business logic.

### Error Handling

- Use `try/catch` blocks in services.
- Map errors to `ResultModel` with codes from `RESPONSE_CODES`.
- Common codes: `100200` (Success), `100404` (Not Found), `100422` (Process Failed).

## Key Constraints

- **Multi-tenant:** Always filter by `pe_system_client_id` and `pe_store_id`.
- **Absolute Imports:** Use `src/core/...` for shared utilities/guards.
- **Git:** Use semantic commits (`feat:`, `fix:`) and follow Git Flow.
- **Security:** Business endpoints MUST be guarded by `AuthGuard`.
