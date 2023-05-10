import { Injectable } from '@nestjs/common';

@Injectable()
export class PistaService {
    private static readonly CANT_PISTAS = 10;
    private listaPistas = [];

    public getPistas(): any {
        for (let i = 0; i < PistaService.CANT_PISTAS; i++) {
            let pista = {
                "identificador": i,
                "titulo": `titulo ${i}`,
                "duracion": Math.floor(Math.random() * 300),
                "interprete": `interprete ${i}`,
                "fecha": `${Math.floor(Math.random() * 30)}/${Math.floor(Math.random() * 12)}/${Math.floor(Math.random() * 99)}`
            }
            this.listaPistas.push(pista);
        }
        return this.listaPistas;
    }

    public agregarPista(body: any): string {
        let pista = {
            "identificador": parseInt(body.identificador),
            "titulo": body.titulo,
            "duracion": Math.floor(Math.random() * 300),
            "interprete": body.interprete,
            "fecha": body.fecha
        }
        this.listaPistas.push(pista);
        return "OK";
    }
}
