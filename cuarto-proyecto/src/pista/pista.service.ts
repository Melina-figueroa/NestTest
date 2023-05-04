import { Injectable } from '@nestjs/common';
import { timingSafeEqual } from 'crypto';

@Injectable()
export class PistaService {
    pistaAudio = [
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

    public getPistas(): any {
        return this.pistaAudio;
    }

    public getPistaById(id: number): any {
        let pista = this.pistaAudio.find(p => p.id == id);
        return pista;
    }
    public crearPista(body: any): any {
        let pista = {
            "id": body.id,
            "titulo": body.titulo,
            "duracion": body.duracion,
            "interprete": body.interprete
        }
        this.pistaAudio.push(pista);
        return {
            "Mensaje": "Se creo una nueva pista",
            "pista": pista
        }
    }

    public modificarPista(id: number, body: any): any {
        let existe = false;
        let pos = 0;
        for (let i = 0; i < this.pistaAudio.length; i++) {
            if (id === this.pistaAudio[i].id) {
                existe = true;
                pos = i;
            }
        }
        if (existe) {
            this.pistaAudio[pos].duracion = body.duracion;
            this.pistaAudio[pos].interprete = body.interprete;
            this.pistaAudio[pos].titulo = body.titulo;
            return {
                "Mensaje": `Pista ${id} modificada`,
                "Pista": this.pistaAudio[pos]
            }

        } else {
            return {
                "Mensaje": `Pista${id} no encontrada`
            }
        }
    }
    public eliminarPista(id: number): any {
        let existe = false;
        let pos = 0;
        for (let i = 0; i < this.pistaAudio.length; i++) {
            if (id === this.pistaAudio[i].id) {
                existe = true;
                pos = i;
            }
        }
        if (existe) {
            this.pistaAudio.splice(pos, 1)
            return {
                "Mensaje": `Pista ${id} Eliminada`
            }

        } else {
            return {
                "Mensaje": `Pista${id} no encontrada`
            }
        }
    }
}