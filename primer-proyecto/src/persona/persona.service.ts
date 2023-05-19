import { Injectable } from '@nestjs/common';
import { PersonaEntity } from './persona.entity/persona.entity';

@Injectable()
export class PersonaService {

    private personas : PersonaEntity[] = [
        {
            id: 1,
            nombre:"Melina",
            apellido:"Figueroa"
        },
        {
            id:2,
            nombre:"Mercedes",
            apellido:"Coronel"
        },
        {
            id:3,
            nombre:"Genaro",
            apellido:"Figueroa"
        }
    ]

    getPersona():string{
        return "Se retorna una persona";
    }

   getPersonas():PersonaEntity[]{
    return this.personas;
   }

   createPerson(persona):string{
    this.personas.push(persona);
    return 'persona creada'
   }
}
