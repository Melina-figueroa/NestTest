import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaEntity } from './persona.entity/persona.entity';

@Controller('persona')
export class PersonaController {
    constructor(private personaService: PersonaService) { }

    @Get('mostrarPersona')
    getPersona(): PersonaEntity[] {
        return this.personaService.getPersona();
    }

    @Get(':id')
    getPersonaById(@Param('id') id: number): PersonaEntity {
        return this.personaService.getPersonaById(id);
    }

    @Post('crear')
    crearPersona(@Body() body: any): void {
        this.personaService.crearPersona(body);

        // Agrega una nueva persona al arreglo
    }
    @Put('persona/modificar/:id')
    modificarPersona(@Param('id') id: number, @Body() persona: PersonaEntity): string {
      return this.personaService.modificarPersona(id, persona);
    }
  
    @Delete('persona/eliminar/:id')
    eliminarPersona(@Param('id') id: number): string {
      return this.personaService.eliminarPersona(id);
    }
  
}