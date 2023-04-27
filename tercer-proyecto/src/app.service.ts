import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  personas = [{
    id : 1,
    nombre : "Melina",
    apellidp : "Figueroa"
  },
  {
    id : 2,
    nombre : "Gabriela",
    apellidp : "Peréz"
  },
  {
    id : 3,
    nombre : "Mercedes",
    apellidp : "Coronel"
  }
];

  getHello(): string {
    return 'Hello World!';
  }
  getDespedir(): string{
    return 'Chau';
  }

  crearPersona(body):string{
    this.personas.push(body);
    return `Persona creada ${body.nombre}`
  }

  getListaPersona(): any[]{
    return this.personas;
  }

  getBuscarPersonaId(id): any{
    return this.personas[id];
  }
}
