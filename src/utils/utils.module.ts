import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtUtilService } from './jwt.service';
import { HashService } from './hash.service';

@Module({
  providers: [JwtUtilService, HashService],
  exports: [JwtUtilService, HashService],
  imports: [
    JwtModule.register({
      secret: process.env.JWT_PRIVATE_KEY || 'top_secret',
      signOptions: {
        expiresIn: '24h'
      }
    }),
  ]
  
})
export class UtilsModule {}
