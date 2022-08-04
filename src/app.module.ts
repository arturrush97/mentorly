import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DbconfigModule } from './dbconfig/dbconfig.module';
import { AuthModule } from './auth/auth.module';
import { UtilsService } from './utils/utils.service';
import { UtilsModule } from './utils/utils.module';

@Module({
  imports: [
    UserModule,
    DbconfigModule,
    AuthModule,
    UtilsModule,
  ],
  controllers: [AppController],
  providers: [AppService, UtilsService],
})
export class AppModule {}
