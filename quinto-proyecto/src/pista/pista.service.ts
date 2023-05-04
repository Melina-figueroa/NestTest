import { Injectable } from '@nestjs/common';

@Injectable()
export class PistaService {

    private listaPistas = [
         {
        "id": 1,
        "titulo": "titulo1",
        "duracion": "123",
        "interprete": "luis miguel"
    },
    {
        "id": 2,
        "titulo": "titulo2",
        "duracion": "123",
        "interprete": "luis fonsi"
    },
    {
        "id": 3,
        "titulo": "titulo3",
        "duracion": "123",
        "interprete": "otro luis"
    }
];
     
    
    getPistas():any{
/*
        const CANTIDAD_PISTAS  = 10;
        for (let i = 0; i < CANTIDAD_PISTAS; i++){
            let pista = {
                'identificador' : i,
                'titulo': `titulo ${i}`,
                'duracion': Math.floor(Math.random() * 3),
                'interprete': `interprete ${Math.floor(Math.random() * 3)}`,
                'fecha': `Fecha de lanzamiento ${Math.floor(Math.random() * 3)}`
            };
            this.listaPistas.push(pista);
        } */
        return {
            titulo: "lista de pistas",
            pista: this.listaPistas
        };      

    }
        crearPista(body:any):any{
            let pista = {
               " identificador": body.identificador,
                "titulo": body.titulo,
                "duracion": body.duracion,
                "interprete": body.interprete,
                "fecha": body.fecha
            }

            this.listaPistas.push(pista);

            return {mensaje:"se creo la pista"}
        }

}
