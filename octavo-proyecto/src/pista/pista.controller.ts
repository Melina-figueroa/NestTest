import { Body, Controller, Get, Post } from '@nestjs/common';
import { PistaService } from './pista.service';

@Controller('pista')
export class PistaController {
    constructor(private PistaService:PistaService){}
    
    @Get('pistas')
    public getPistas():any{
        return this.PistaService.getPistas();
    }
    @Post('agregar')
    public agregarPista(@Body() body:any): string{
        return this.PistaService.agregarPista(body);
    }

}
