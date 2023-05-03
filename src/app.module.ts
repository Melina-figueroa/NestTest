import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaController } from './persona/persona.controller';
import { PersonaService } from './persona/persona.service';
import { PistaController } from './pista/pista.controller';

@Module({
  imports: [],
  controllers: [AppController, PersonaController, PistaController],
  providers: [AppService, PersonaService],
})
export class AppModule {}
