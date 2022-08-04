import { Module } from '@nestjs/common';

import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { UtilsModule } from 'src/utils/utils.module';
import { UtilsService } from 'src/utils/utils.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    UserModule,
    UtilsModule
  ]
})
export class AuthModule {}
