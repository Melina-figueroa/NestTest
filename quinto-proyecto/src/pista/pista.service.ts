import { Injectable } from '@nestjs/common';

@Injectable()
export class PistaService {

    private listaPistas = []
    pistasAudio: any;

    getPistas(): any {
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
            titulo: 'lista de pistas',
            pistas: this.listaPistas,
        };

    }
    crearPista(body): any {
        const pista = {
            id: body.id,
            titulo: body.titulo,
            duracion: body.duracion,
            interprete: body.interprete,
            fecha: body.fecha
        }
        this.listaPistas.push(pista);
        return {
            mensaje: 'se creo la pista',
            pista: pista,
        };
    }

}
