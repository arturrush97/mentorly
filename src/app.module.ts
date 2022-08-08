import { join } from 'path';

import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DbconfigModule } from './dbconfig/dbconfig.module';
import { AuthModule } from './auth/auth.module';
import { UtilsService } from './utils/utils.service';
import { UtilsModule } from './utils/utils.module';

import { UserResolver } from './user/graphQl/user.resolver';
import { AuthResolver } from './auth/graphQl/auth.resolver';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: false,
      playground: true,
    }),
    UserModule,
    DbconfigModule,
    AuthModule,
    UtilsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    UtilsService,
    AuthService,
    UserResolver,
    AuthResolver,
  ],
})
export class AppModule {}
