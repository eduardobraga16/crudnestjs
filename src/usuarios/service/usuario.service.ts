import { Injectable } from '@nestjs/common';
import { Usuario } from '../dto/usuario';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectModel('Usuario') private readonly usuarioModel : Model<Usuario>
    ){

    }

    async getAll(){
        return await this.usuarioModel.find().exec();
    }

    async getById(id: string){
        return await this.usuarioModel.findById(id).exec();
    }

    async getByEmail(email: string){
        return await this.usuarioModel.findOne({email}).exec();
    }

    async create(usuario: Usuario){
        const criarUsuario = new this.usuarioModel(usuario);
        return await criarUsuario.save();
    }

    async update(id: string, usuario: Usuario){
        await this.usuarioModel.updateOne({_id: id},usuario).exec();
        return this.getById(id);
    }

    async delete(id: string){
        return await this.usuarioModel.deleteOne({_id:id}).exec();
    }

}

