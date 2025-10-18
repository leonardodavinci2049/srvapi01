import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ProductModule } from 'src/product/product.module';

import { CartModule } from 'src/cart/cart.module';
import { CustomerModule } from 'src/customer/customer.module';
import { AccountModule } from 'src/account/account.module';
import { CheckModule } from 'src/check/check.module';
import { TaxonomyModule } from 'src/taxonomy/taxonomy.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'pageroot'),
      exclude: ['/api/*'], // Exclui a API
      serveRoot: '/', // Serve na raiz da aplicação
    }),
    PrismaModule,
    ProductModule, // Importando o módulo de produtos
    CartModule, // Importando o módulo de carrinho
    CustomerModule, // Importando o módulo de clientes
    TaxonomyModule,
    AccountModule,
    CheckModule,
    ThrottlerModule.forRoot([
      // proteção conta ataque de força bruta
      {
        ttl: 60000, // tempo 1 minuto
        limit: 500, // 100 requisições
        // ignoreUserAgents: [/googlebot/],
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
