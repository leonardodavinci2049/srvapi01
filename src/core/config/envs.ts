import 'dotenv/config';

import * as joi from 'joi';
// zod
// env_-schema não usar por enquanto altera o tsconfig
interface EnvVars {
  APP_API_URL: string;
  APP_SWAGGER_URL: string;

  APP_JWT_SECRET: string;
  APP_PORT: number;
  API_KEY: string;
  DB_MYSQL_HOST: string;
  DB_MYSQL_PORT: number;
  DB_MYSQL_USER: string;
  DB_MYSQL_PASSWORD: string;
  DB_MYSQL_DATABASE: string;
}

const envsSchema = joi
  .object({
    APP_API_URL: joi.string().required(),
    APP_SWAGGER_URL: joi.string().required(),

    APP_JWT_SECRET: joi.string().required(),
    APP_PORT: joi.number().positive().required(),
    API_KEY: joi.string().required(),

    DB_MYSQL_HOST: joi.string().required(),
    DB_MYSQL_PORT: joi.number().positive().required(),
    DB_MYSQL_USER: joi.string().required(),
    DB_MYSQL_PASSWORD: joi.string().required(),
    DB_MYSQL_DATABASE: joi.string().required(),
  })
  .unknown(true);

const validationResult = envsSchema.validate(process.env);
const error: joi.ValidationError | undefined = validationResult.error;
const value = validationResult.value as EnvVars;

if (error) {
  throw new Error(`❌ Invalid environment variables:  ${error.message}`);
}
const envVars: EnvVars = value;

export const envs = {
  APP_SWAGGER_URL: envVars.APP_SWAGGER_URL,

  APP_JWT_SECRET: envVars.APP_JWT_SECRET,
  APP_PORT: envVars.APP_PORT,
  API_KEY: envVars.API_KEY,

  DB_MYSQL_HOST: envVars.DB_MYSQL_HOST,
  DB_MYSQL_PORT: envVars.DB_MYSQL_PORT,
  DB_MYSQL_USER: envVars.DB_MYSQL_USER,
  DB_MYSQL_PASSWORD: envVars.DB_MYSQL_PASSWORD,
  DB_MYSQL_DATABASE: envVars.DB_MYSQL_DATABASE,
};
