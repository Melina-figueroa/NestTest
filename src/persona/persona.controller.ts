import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaEntity } from './persona.entity/persona.entity';

@Controller('persona')
export class PersonaController {

   constructor(private personaService:PersonaService){
    }

    @Get('')
    getPersona(): string{
        return this.personaService.getPersona();
    }

    @Get('lista')
    getPersonas():PersonaEntity{
        return this.personaService.getPersonas();
    }

    @Get(':id')
    getPersonaId(@Param() params):PersonaEntity[]{
        return this.personaService.getPersonas()[params.id];
    }
    @Post('crear')
    crearPersona(@Body()body):string{
        this.personaService.createPerson(body);
    }
}
//rompio =(