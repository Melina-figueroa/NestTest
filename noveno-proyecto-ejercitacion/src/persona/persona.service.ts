import { Injectable } from '@nestjs/common';
import { PersonaEntity } from './persona.entity/persona.entity';

@Injectable()
export class PersonaService {
    private personas: PersonaEntity[] = [
        {
            id: 1,
            nombre: 'Melina',
            apellido: 'Figueroa',
        },
        {
            id: 2,
            nombre: 'Mercedes',
            apellido: 'Coronel',
        },
        {
            id: 3,
            nombre: 'Genaro',
            apellido: 'Figueroa',
        },
    ];

    getPersona(): PersonaEntity[] {
        return this.personas;
    }

    getPersonaById(id: number): PersonaEntity {
        return this.personas.find(persona => persona.id === id);
    }

    crearPersona(persona: any): void {
        this.personas.push(persona);
        
    }
    modificarPersona(id: number, persona: PersonaEntity): string {
        const personaExistente = this.personas.find(p => p.id === id);
    
        if (personaExistente) {
          personaExistente.nombre = persona.nombre;
          personaExistente.apellido = persona.apellido;
          return 'Persona modificada';
        } else {
          return 'No se encontró la persona';
        }
      }
    
      eliminarPersona(id: number): string {
        const indice = this.personas.findIndex(p => p.id === id);
    
        if (indice !== -1) {
          this.personas.splice(indice, 1);
          return 'Persona eliminada';
        } else {
          return 'No se encontró la persona';
        }
      }
}
