import { Controller, Get } from '@nestjs/common';
import { Usuario } from './dto/usuario';
import { UsuarioService } from './service/usuario.service';

@Controller('usuarios')
export class UsuariosController {
    
    constructor(
        private usuarioService: UsuarioService
    ){}

    @Get()
    async getAll() : Promise<Usuario[]>{
        return this.usuarioService.getAll();
    }

}
