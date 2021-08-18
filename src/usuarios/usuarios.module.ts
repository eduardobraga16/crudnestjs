import {MongooseModule} from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UsuarioService } from './service/usuario.service';
import { UsuariosController } from './usuarios.controller';
import { UsuarioSchema } from './schemas/usuario.schema';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        MongooseModule.forFeature([{ name : 'Usuario', schema: UsuarioSchema }])
    ],
    controllers: [UsuariosController],
    providers: [UsuarioService],
    exports: [UsuarioService]
})
export class UsuariosModule {}
