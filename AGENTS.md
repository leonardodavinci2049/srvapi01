# AGENTS.md - srvapi01

This file provides guidance for agentic coding agents working on this repository.

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

```

## Code Style Guidelines

### Import Organization

- Imports grouped by: NestJS, third-party, internal modules, relative imports
- External imports: `import { Controller, Get } from '@nestjs/common';`
- Internal modules: `import { DatabaseService } from 'src/database/database.service';`
- Relative imports: `import { BrandFindAllDto } from './dto/brand-find-all.dto';`

### Formatting (Prettier)

- Single quotes only
- Trailing commas for all
- End of line: auto
- Run `pnpm run format` before committing

### Type Safety

- TypeScript 5.9+, target ES2023, module nodenext
- Experimental decorators enabled
- `noImplicitAny`: off (allow any when needed)
- Cast to specific types when using DatabaseService: `as unknown as SpResultBrandFindAllData`

### Naming Conventions

**Files:** kebab-case

- `brand.module.ts`, `brand-find-all.dto.ts`, `brand-find-all.query.ts`

**Classes:** PascalCase

- `BrandService`, `BrandFindAllV2Dto`, `BrandModule`

**Methods:** camelCase with task/action prefix

- Service methods: `taskBrandFindAllV2`, `taskBrandCreateV2`
- Query functions: `BrandFindAllV2Query`

**Variables:** camelCase

- DTO params: `pe_app_id`, `pe_system_client_id`, `pe_store_id`
- Local vars: `resultData`, `queryString`, `errorMessage`

**Database:**

- Tables: `tbl_*` (e.g., `tbl_brand`)
- Stored Procedures: `sp_*_v1` or `sp_*_v2`
- SP params: `pe_*` prefix

### Architecture Patterns

**Module Structure (v2):**

```
module-name/
├── module-name.module.ts      # imports: [DatabaseModule]
├── module-name.controller.ts  # @Controller, @UseGuards(AuthGuard)
├── module-name.service.ts     # @Injectable, DatabaseService injection
├── dto/                       # DTOs with @ApiProperty + class-validator
├── query/                     # Pure functions returning CALL sp_*()
├── types/                     # RowDataPacket interfaces
└── entities/                  # Entity placeholders
```

**DTO Pattern:**

```typescript
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class BrandFindAllV2Dto {
  @ApiProperty({ description: 'App ID' })
  @IsNumber()
  @IsNotEmpty()
  pe_app_id: number;
}
```

**Query Builder Pattern:**

```typescript
import { BrandFindAllV2Dto } from '../dto/brand-find-all-v2.dto';

export function BrandFindAllV2Query(dto: BrandFindAllV2Dto): string {
  return ` call sp_brand_find_all_v2(${dto.pe_app_id ?? 1}, ...) `;
}
```

**Service Pattern:**

```typescript
@Injectable()
export class BrandService {
  constructor(private readonly dbService: DatabaseService) {}

  async taskBrandFindAllV2(dto: BrandFindAllV2Dto) {
    try {
      const queryString = BrandFindAllV2Query(dto);
      const resultData = (await this.dbService.selectExecute(
        queryString,
      )) as unknown[];
      return processProcedureResultMultiQuery(
        resultData,
        ['brands'],
        'Not found',
      );
    } catch (err) {
      const msg = err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
      return new ResultModel(100404, msg, '0', []);
    }
  }
}
```

**Controller Pattern:**

```typescript
@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Get() // Info endpoint, no auth
  getHello() {
    return { name: 'Wholesale API', status: 'online' };
  }

  @UseGuards(AuthGuard)
  @Post('v2/brand-find-all')
  brandFindAllV2(@Body() dto: BrandFindAllV2Dto) {
    return this.brandService.taskBrandFindAllV2(dto);
  }
}
```

### Error Handling

**Standard Pattern:**

```typescript
try {
  // Database operation
  const resultData = await this.dbService.selectExecute(queryString);
  return processProcedureResultMutation(resultData, 'Operation failed');
} catch (err) {
  const errorMessage =
    err instanceof Error ? err.message : MESSAGES.UNKNOWN_ERROR;
  return new ResultModel(100404, errorMessage, '0', []);
}
```

**Response Codes:**

- 100200: SUCCESS / NO_CONTENT_FOUND
- 100201: PROCESSED_SUCCESS
- 100404: NOT_FOUND
- 100400: VALIDATION_ERROR
- 100422: PROCESSING_FAILED
- 100500: INTERNAL_ERROR
- 100401: UNAUTHORIZED

### Database Access

**Use DatabaseService, NOT Prisma:**

- `selectExecute<T>(sql, params?)` - SELECT / CALL SP (prepared)
- `selectQuery<T>(sql, params?)` - SELECT / CALL SP (query)
- `ModifyExecute(sql, params?)` - INSERT/UPDATE/DELETE (prepared)
- `ModifyQuery(sql, params?)` - INSERT/UPDATE/DELETE (query)
- `runInTransaction<T>(callback)` - Transaction with auto-rollback
- `chamarProcedimento<T>(name, params?)` - CALL by name

### TypeScript Types

**RowDataPacket for DB results:**

```typescript
import { RowDataPacket } from 'mysql2';

export interface TblBrandFindALL extends RowDataPacket {
  ID_MARCA: number;
  MARCA: string;
}
```

**Procedure result types:**

```typescript
export interface SpDefaultFeedback extends RowDataPacket {
  sp_return_id: number;
  sp_message: string;
  sp_error_id: number;
}
```

### Decorators

**Common imports:**

```typescript
import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Injectable,
} from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
```

**Guard imports:**

```typescript
import { AuthGuard } from 'src/core/guards/auth.guard';
import { Roles } from 'src/core/decorators/roles.decorator';
```

**Core utility imports:**

```typescript
import {
  MESSAGES,
  RESPONSE_CODES,
} from 'src/core/utils/constants/globalConstants';
import { processProcedureResultMutation } from 'src/core/procedure.result/process-procedure-result.mutation';
import { ResultModel } from 'src/core/procedure.result/result.model';
```

## Key Constraints

- **NEVER use Prisma** - DatabaseService with raw SQL/SP only
- Always filter by `pe_system_client_id` and `pe_store_id` (multi-tenant)
- Use `@UseGuards(AuthGuard)` for business endpoints
- All business endpoints use `@Post('v2/action-name')`
- DTOs must have `@ApiProperty` + class-validator decorators
- Imports from `src/core/` use absolute paths (e.g., `src/core/config`)
- Run `pnpm run lint` and `pnpm run format` before committing

## Git Conventions

Semantic commits: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`, `perf:`, `style:`, `build:`, `ci:`, `cleanup:`, `remove:`

Git Flow:

```bash
git flow feature start featr-XX
git flow feature finish featr-XX
git flow release start rls-XX
git flow release finish rls-XX
```
