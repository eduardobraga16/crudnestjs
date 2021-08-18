import { Module } from '@nestjs/common';
import { UsuariosModule } from '../usuarios.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports:[
    UsuariosModule
  ],
  providers: [
    AuthService,
    LocalStrategy
  ],
  controllers: [AuthController]
})
export class AuthModule {}
