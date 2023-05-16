import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculadoraService {

    calcular(a: string, b: string, op: string): string {
        let resultado;
        let n1 = parseInt(a);
        let n2 = parseInt(b);
        switch (op) {
            case 'sumar':
                resultado = { "resultado": `${n1 + n2}` };
                break;

            case 'restar':
                resultado = { "resultado": `${n1 - n2}` };
                break;
            case 'multiplicar':
                resultado = { "resultado": `${n1 * n2}` };
                break;
            case 'dividir': {
                if (n2 == 0)
                    resultado = { "resultado ": `Division por` }
                else
                    resultado = { "resultado": `${n1 / n2}` }
                break;
            }
            default:
                resultado = { "error": `operacion invalidad` }

        }
        return resultado;
    }
}
    /*
        sumar(a: number, b:number): number {
            return a+b;
          }
          restar(a: number, b:number): number {
            return a-b;
          }
          multiplicar(a: number, b:number): number {
            return a*b;
          }
          dividir(a: number, b:number): number {
            return a/b;
          } */

