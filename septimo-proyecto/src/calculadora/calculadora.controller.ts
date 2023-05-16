import { Controller, Get, Param } from '@nestjs/common';
import { CalculadoraService } from './calculadora.service';

@Controller('calculadora')
export class CalculadoraController {
    constructor(private readonly calculadoraService: CalculadoraService){}

    @Get('saludar')
    saludar(){
        
    }

    @Get(':num1/:num2/:operacion')
    calcular(@Param('num1') num1, @Param('num2') num2, @Param('operacion') op):string{
        return this.calculadoraService.calcular(num1,num2,op)
    }
}
    /*@Get('sumar/:num1/:num2')
    sumar(@Param('num1') num1: number, @Param('num2') num2: number): number {
      return this.calculadoraService.sumar(num1, num2);
    }

    @Get('restar/:num1/:num2')
    restar(@Param('num1') num1: number, @Param('num2') num2: number): number {
      return this.calculadoraService.restar(num1, num2);
    }

    @Get('multiplicar/:num1/:num2')
    multiplicar(@Param('num1') num1: number, @Param('num2') num2: number): number {
      return this.calculadoraService.multiplicar(num1, num2);
    }

    @Get('dividir/:num1/:num2')
    dividir(@Param('num1') num1: number, @Param('num2') num2: number): number {
      return this.calculadoraService.dividir(num1, num2);
    }*/

