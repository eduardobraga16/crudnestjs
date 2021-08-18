import { Injectable } from '@nestjs/common';
import { UsuarioService } from '../service/usuario.service';

@Injectable()
export class AuthService {
    constructor(
        private usuarioService : UsuarioService
    ){}

    async validarUsuario(usuarioEmail: string, usuarioSenha: string){
        const user = await this.usuarioService.getByEmail(usuarioEmail);
        if(user && user.senha === usuarioSenha){
            const {_id, nome, email} = user;
            return {id: _id, nome, email};
        }

        return null;
    }
}
