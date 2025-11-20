import 'dotenv/config';

import { z } from 'zod';

const envsSchema = z
  .object({
    APP_API_URL: z.string().min(1),
    APP_SWAGGER_URL: z.string().min(1),

    APP_JWT_SECRET: z.string().min(1),
    APP_PORT: z.coerce.number().positive(),
    API_KEY: z.string().min(1),

    DB_MYSQL_HOST: z.string().min(1),
    DB_MYSQL_PORT: z.coerce.number().positive(),
    DB_MYSQL_USER: z.string().min(1),
    DB_MYSQL_PASSWORD: z.string().min(1),
    DB_MYSQL_DATABASE: z.string().min(1),

    DATABASE_URL: z.string().min(1),
  })
  .passthrough();

const validationResult = envsSchema.safeParse(process.env);

if (!validationResult.success) {
  const message = validationResult.error.issues
    .map((issue) => `${issue.path.join('.') || 'env'}: ${issue.message}`)
    .join(', ');
  throw new Error(`❌ Invalid environment variables: ${message}`);
}

const envVars = validationResult.data;

export const envs = {
  APP_API_URL: envVars.APP_API_URL,
  APP_SWAGGER_URL: envVars.APP_SWAGGER_URL,

  APP_JWT_SECRET: envVars.APP_JWT_SECRET,
  APP_PORT: envVars.APP_PORT,
  API_KEY: envVars.API_KEY,

  DB_MYSQL_HOST: envVars.DB_MYSQL_HOST,
  DB_MYSQL_PORT: envVars.DB_MYSQL_PORT,
  DB_MYSQL_USER: envVars.DB_MYSQL_USER,
  DB_MYSQL_PASSWORD: envVars.DB_MYSQL_PASSWORD,
  DB_MYSQL_DATABASE: envVars.DB_MYSQL_DATABASE,

  DATABASE_URL: envVars.DATABASE_URL,
};
