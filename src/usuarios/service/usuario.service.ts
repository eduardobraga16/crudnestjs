import { Injectable } from '@nestjs/common';
import { Usuario } from '../dto/usuario';

@Injectable()
export class UsuarioService {
    usuarios:  Usuario[] = [
        {nome:'eduardo', email:'edu@gmail.com',senha:'123',ativo:true},
        {nome:'braga', email:'braga@gmail.com',senha:'123',ativo:true},
        {nome:'higino', email:'higino@gmail.com',senha:'123',ativo:true},
    ];

    getAll(){
        return this.usuarios;
    }

    getById(id: number){

    }

    create(usuario: Usuario){

    }

    update(usuario: Usuario, id: number){

    }

    delete(id: number){

    }

}

