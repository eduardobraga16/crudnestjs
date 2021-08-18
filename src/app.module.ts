import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './usuarios/auth/auth.module';

@Module({
  imports: [
    UsuariosModule,
    MongooseModule.forRoot('mongodb+srv://wermisonprivate:juca199416@cluster0.ucaei.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
