import { Module } from '@nestjs/common';
import { UsuarioService } from './service/usuario.service';
import { UsuariosController } from './usuarios.controller';

@Module({
    controllers: [UsuariosController],
    providers: [UsuarioService],
})
export class UsuariosModule {}
