# srvapi01 — Wholesale (B2B) API

A multi-tenant **wholesale / B2B e-commerce REST API** built with [NestJS](https://nestjs.com/) and TypeScript. It exposes versioned business endpoints for catalog management (products, brands, taxonomies, suppliers), shopping cart, customers, carriers, and the full order lifecycle (B2B sales, operations, reports), all backed by a **MySQL/MariaDB** database using raw SQL and Stored Procedures.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Architecture & Conventions](#architecture--conventions)
- [API Authentication](#api-authentication)
- [Testing](#testing)
- [Linting & Formatting](#linting--formatting)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Versioned business endpoints** (`POST v2/...`) following a consistent action-based pattern.
- **Multi-tenant by design** — every query is scoped by `pe_system_client_id` and `pe_store_id`.
- **API-key authentication** via `AuthGuard` on all business routes.
- **Rate limiting** with `@nestjs/throttler` to protect against brute-force / abuse.
- **Strict payload validation** through `class-validator` DTOs with Swagger (`@ApiProperty`) metadata.
- **Database layer with no ORM** — raw SQL and Stored Procedures over `mysql2`, with a typed `DatabaseService` and connection pooling.
- **Validated configuration** — environment variables are parsed and validated with `Zod` at boot.
- **Domain-driven modules** — self-contained feature modules (controller → service → query → types).

## Tech Stack

| Layer            | Technology                                                |
| ---------------- | -------------------------------------------------------- |
| Runtime          | Node.js                                                  |
| Language         | TypeScript (target `ES2023`, `nodenext` modules)         |
| Framework        | NestJS 11                                                |
| Database         | MySQL / MariaDB (`mysql2`)                               |
| Data access      | Raw SQL + Stored Procedures (no Prisma / ORM)            |
| Validation       | `class-validator`, `class-transformer`                   |
| API docs         | `@nestjs/swagger`                                        |
| Config           | `@nestjs/config` + `zod`                                 |
| Rate limiting    | `@nestjs/throttler`                                      |
| Static serving   | `@nestjs/serve-static`                                   |
| Package manager  | `pnpm`                                                   |
| Testing          | Jest (`ts-jest`)                                         |
| Linting          | ESLint + Prettier                                        |

## Project Structure

```
srvapi01/
├── src/
│   ├── app.main/            # Root module, health/info controller, bootstrap wiring
│   ├── core/                # Shared kernel
│   │   ├── config/          # Zod-validated environment variables
│   │   ├── guards/          # AuthGuard (API key), RoleGuard
│   │   ├── decorators/      # Custom decorators
│   │   ├── interceptors/    # Response shaping interceptors
│   │   ├── middlewares/
│   │   ├── enums/
│   │   ├── procedure.result/# Stored-procedure result processors
│   │   ├── procedures/
│   │   └── utils/           # ResultModel, constants, helpers
│   ├── database/            # DatabaseService (pool, execute/query, transactions)
│   └── <feature>/           # Feature modules (see below)
├── pageroot/                # Static assets served at root
├── test/                    # E2E tests
├── nest-cli.json
├── tsconfig.json
└── package.json
```

### Feature modules

Each feature module follows the same layout: `controller → service → query → dto → types`.

| Domain        | Modules                                                                     |
| ------------- | --------------------------------------------------------------------------- |
| Catalog       | `product`, `product-base`, `product-pdv`, `product-web`, `product-inline`, `product-update`, `physical_product` |
| Taxonomy      | `taxonomy`, `taxonomy-base`, `taxonomy-inline`, `taxonomy-rel`, `taxonomy-web` |
| Reference data| `brand`, `ptype`, `supplier`, `carrier`                                     |
| Commerce      | `cart`, `customer`, `customer-inline`, `customer-upd`                       |
| Orders        | `order-items`, `order-operation`, `order-reports`, `order-sales`, `order-upd`, `order-b2b` |
| Platform      | `account`, `check`, `general-call`, `system`                                |

## Prerequisites

- **Node.js** `>= 20` (developed on Node 24)
- **pnpm** (install via `corepack enable && corepack prepare pnpm@latest --activate`)
- A reachable **MySQL / MariaDB** instance with the required Stored Procedures deployed

## Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd srvapi01
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the project root (see [Environment Variables](#environment-variables)).

4. **Run in development mode**

   ```bash
   pnpm run dev
   ```

   The API will be available at `http://localhost:<APP_PORT>/api` (default port `3000`).

5. **Build & run for production**

   ```bash
   pnpm run build
   pnpm run start:prod
   ```

## Environment Variables

All variables are validated with `Zod` at startup — the app fails fast if any are missing or invalid.

| Variable          | Description                              | Example        |
| ----------------- | ---------------------------------------- | -------------- |
| `APP_PORT`        | Port the HTTP server listens on          | `3000`         |
| `APP_API_URL`     | Public base URL of the API               | `http://localhost:3000/api` |
| `APP_SWAGGER_URL` | Public URL for the Swagger UI            | `http://localhost:3000/docs` |
| `APP_JWT_SECRET`  | Secret used for JWT signing              | `your-secret`  |
| `API_KEY`         | API key required by `AuthGuard`          | `your-api-key` |
| `DATABASE_HOST`   | MySQL/MariaDB host                       | `127.0.0.1`    |
| `DATABASE_PORT`   | MySQL/MariaDB port                       | `3306`         |
| `DATABASE_USER`   | Database user                            | `root`         |
| `DATABASE_PASSWORD`| Database password                       | `secret`       |
| `DATABASE_NAME`   | Database/schema name                     | `wholesale_db` |

Example `.env`:

```dotenv
APP_PORT=3000
APP_API_URL=http://localhost:3000/api
APP_SWAGGER_URL=http://localhost:3000/docs
APP_JWT_SECRET=change-me
API_KEY=change-me

DATABASE_HOST=127.0.0.1
DATABASE_PORT=3306
DATABASE_USER=root
DATABASE_PASSWORD=secret
DATABASE_NAME=wholesale_db
```

## Available Scripts

| Command                | Description                                            |
| ---------------------- | ------------------------------------------------------ |
| `pnpm run dev`         | Start in watch mode (`nest start --watch`)             |
| `pnpm run build`       | Compile the production build (`nest build`)            |
| `pnpm run start`       | Start from source (`nest start`)                       |
| `pnpm run start:prod`  | Run the compiled app (`node dist/main`)                |
| `pnpm run start:debug` | Start in debug mode                                    |
| `pnpm run lint`        | Lint and auto-fix with ESLint                          |
| `pnpm run format`      | Format sources with Prettier                           |
| `pnpm run test`        | Run unit tests (Jest)                                  |
| `pnpm run test:watch`  | Run tests in watch mode                                |
| `pnpm run test:cov`    | Run tests with coverage report                         |
| `pnpm run test:e2e`    | Run end-to-end tests                                   |

## Architecture & Conventions

### Request flow (v2 pattern)

```
HTTP POST /api/<feature>/v2/<action>
        │
        ▼
 Controller (@UseGuards(AuthGuard)) ── validates via DTO (class-validator)
        │
        ▼
 Service  ── builds the query string, calls DatabaseService, maps ResultModel
        │
        ▼
 Query    ── pure function returning the SP/SQL call string
        │
        ▼
 DatabaseService.selectExecute / ModifyExecute ── mysql2 pool
```

### Naming conventions

- **Files:** `kebab-case` (`brand-find-all.dto.ts`)
- **Classes:** `PascalCase` (`BrandService`)
- **Service methods:** `task<Feature><Action>V2` (`taskBrandFindAllV2`)
- **Controller methods:** `<feature><Action>V2` (`brandFindAllV2`)
- **Tables:** `tbl_*` · **Stored Procedures:** `sp_*_v2`
- **SP parameters (locals):** `pe_*` (`pe_system_client_id`, `pe_store_id`)
- **Imports:** absolute for shared code (`src/core/...`, `src/database/...`); relative within a module.

### Data access

- **No ORM / no Prisma.** Use `DatabaseService` with raw SQL and Stored Procedures.
- Cast DB results explicitly: `(await db.selectExecute(...)) as unknown as T[]`.
- Define row interfaces extending `RowDataPacket` from `mysql2`.

### Error handling

- Services wrap logic in `try/catch` and map errors to a `ResultModel` using codes from `RESPONSE_CODES`.
- Common codes: `100200` (Success), `100404` (Not Found), `100422` (Process Failed).

## API Authentication

Business endpoints are protected by `AuthGuard`. Provide a valid API key on every request via one of:

```http
Authorization: Bearer <API_KEY>
```

```http
x-api-key: <API_KEY>
```

All routes are served under the global `/api` prefix and use the `POST` method with a JSON body validated against the route's DTO.

## Testing

```bash
# Unit tests
pnpm run test

# Watch mode
pnpm run test:watch

# Coverage report
pnpm run test:cov

# End-to-end tests
pnpm run test:e2e

# Run a single test file
pnpm run test -- <path/to/file.spec.ts>
```

## Linting & Formatting

```bash
pnpm run lint     # ESLint with auto-fix
pnpm run format   # Prettier (single quotes, trailing commas, semicolons)
```

Always run `pnpm run format` before committing.

## Contributing

This project follows **Git Flow** with semantic commit messages:

- `feat:` a new feature
- `fix:` a bug fix
- `refactor:` code restructuring without behavior change
- `docs:` documentation only
- `chore:` tooling / maintenance

Workflow:

1. Branch from `develop` (`feature/<short-description>`).
2. Keep commits focused and use semantic prefixes.
3. Ensure `pnpm run lint`, `pnpm run format`, and `pnpm run test` pass before opening a pull request.

## License

Distributed under the [MIT License](./LICENSE).
