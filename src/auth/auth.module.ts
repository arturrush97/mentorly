import { Module, forwardRef } from '@nestjs/common';

import { UserModule } from 'src/user/user.module';
import { UtilsModule } from 'src/utils/utils.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtAuthGuard],
  imports: [
    forwardRef(() => UserModule),
    UtilsModule,
  ],
  exports: [AuthModule]
})
export class AuthModule {}
