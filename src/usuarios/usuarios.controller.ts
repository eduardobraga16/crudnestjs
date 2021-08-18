import { Controller, Get, Param, Body, Post, Put, Delete } from '@nestjs/common';
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
    @Get(':id')
    async getById(@Param('id') id: string) : Promise<Usuario>{
        return this.usuarioService.getById(id);
    }

    @Post()
    async create(@Body() usuario: Usuario) : Promise<Usuario>{
        return this.usuarioService.create(usuario);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() usuario: Usuario) : Promise<Usuario>{
        return this.usuarioService.update(id, usuario);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        this.usuarioService.delete(id);
    }

}
