import 'dotenv/config';

import { z } from 'zod';

const envsSchema = z
  .object({
    APP_API_URL: z.string().min(1),
    APP_SWAGGER_URL: z.string().min(1),

    APP_JWT_SECRET: z.string().min(1),
    APP_PORT: z.coerce.number().positive(),
    API_KEY: z.string().min(1),

    DATABASE_HOST: z.string().min(1),
    DATABASE_PORT: z.coerce.number().positive(),
    DATABASE_USER: z.string().min(1),
    DATABASE_PASSWORD: z.string().min(1),
    DATABASE_NAME: z.string().min(1),
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

  DATABASE_HOST: envVars.DATABASE_HOST,
  DATABASE_PORT: envVars.DATABASE_PORT,
  DATABASE_USER: envVars.DATABASE_USER,
  DATABASE_PASSWORD: envVars.DATABASE_PASSWORD,
  DATABASE_NAME: envVars.DATABASE_NAME,
};
