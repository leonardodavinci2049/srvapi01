import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.main/app.module';
import { envs } from './core/config/envs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(envs.APP_PORT);
  console.log(
    `🚀 Application is running on: http://localhost:${envs.APP_PORT}`,
  );
}
bootstrap();
