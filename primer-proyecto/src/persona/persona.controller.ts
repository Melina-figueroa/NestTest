import { Injectable } from '@nestjs/common';
import { PersonaEntity } from './persona.entity/persona.entity';

@Injectable()
export class PersonaService {
  private personas: PersonaEntity[] = []; // Un arreglo para almacenar las personas

  getPersona(): string {
    return 'Hola, soy una persona'; // Ejemplo de una función en el servicio
  }

  getPersonas(): PersonaEntity[] {
    return this.personas; // Retorna el arreglo de personas
  }

  getPersonaById(id: number): PersonaEntity {
    return this.personas.find(persona => persona.id === id); // Retorna la persona con el ID específico
  }

  createPersona(persona: PersonaEntity): void {
    this.personas.push(persona); // Agrega una nueva persona al arreglo
  }
}
