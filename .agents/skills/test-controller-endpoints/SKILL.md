---
name: test-controller-endpoints
description: Test endpoints from a NestJS controller in this repository with curl and generate the required Markdown report. Use when the user asks to test, validate, exercise, or generate a report for all HTTP endpoints of a specific controller file, especially files like src/**/**.controller.ts that use DTO sample JSON comments and AuthGuard/API_KEY from .env.
---

# Test Controller Endpoints

## Overview

Use this skill to test every HTTP endpoint declared in a NestJS controller via `curl` and write a Markdown report beside the controller.

This repository uses:

- Global route prefix: `/api`.
- Host: `http://localhost`.
- Port: read `APP_PORT` from `.env`, fallback `3000`.
- API key: read `API_KEY` from `.env`.
- Auth headers: prefer `Authorization: Bearer <API_KEY>`.
- DTO test bodies: only use JSON from comments beginning with `Sample JSON for testing in body endpoint:`.

## Workflow

1. Receive the controller path from the user.
2. Confirm the file exists and is a NestJS controller.
3. Use the helper script to discover endpoints, extract DTO sample bodies, execute `curl`, and generate the report:

```bash
python3 .agents/skills/test-controller-endpoints/scripts/test_controller_endpoints.py <controller-path>
```

4. Report the generated Markdown path and summarize totals. Do not print the real API key.

To validate parsing without calling the API, run:

```bash
python3 .agents/skills/test-controller-endpoints/scripts/test_controller_endpoints.py <controller-path> --discover-only
```

## Required Behavior

Discover methods decorated with:

- `@Get(...)`
- `@Post(...)`
- `@Put(...)`
- `@Patch(...)`
- `@Delete(...)`

For each discovered endpoint, record:

- HTTP method.
- Controller base route from `@Controller(...)`.
- Method route from the HTTP decorator.
- Final endpoint path using `/api/<controller-route>/<method-route>`.
- Final URL using `http://localhost:<APP_PORT>`.
- DTO from `@Body()`, when present.
- DTO file resolved from the controller import.
- Whether `AuthGuard` is present on the controller or method.

If the controller has no `@Controller(...)`, stop and report a clear error. If a method has `@Body()` but the DTO sample JSON block is missing, mark that endpoint as `SKIPPED` and do not call it. Never invent request bodies.

## Report Rules

The report must be overwritten on each run and saved beside the controller:

```text
<controller-file-name>.md
```

Example:

```text
src/physical_product/physical_product.controller.ts
src/physical_product/physical_product.controller.md
```

The report must include:

- Summary totals.
- A table with `Status`, `Método`, `Endpoint`, `HTTP`, and `Observação`.
- Per-endpoint details with curl command, request body, response, and error.
- The masked API key placeholder `<API_KEY>` in any curl command.

If the response body is valid JSON, write it as a `json` block. Otherwise, write it as a `text` block.

## Safety

- Do not expose the real `API_KEY` in terminal output or reports.
- Do not execute requests when only creating or updating this skill.
- Prefer the helper script for consistency. If manually testing, preserve the same report format and masking rules.
