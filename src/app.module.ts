import { Module } from '@nestjs/common';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DbconfigModule } from './dbconfig/dbconfig.module';



@Module({
  imports: [
    UserModule,
    DbconfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
