import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtUtilService } from './jwt.service';
import { HashService } from './hash.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  providers: [JwtUtilService, HashService],
  exports: [JwtUtilService, HashService],
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get('JWT_PRIVATE_KEY') || 'top_secret',
          signOptions: {
            expiresIn: configService.get('TOKEN_EXPIRES_IN')
          }
        }
      },
      inject: [ConfigService]
    }),
  ]

})
export class UtilsModule { }
