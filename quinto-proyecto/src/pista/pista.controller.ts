import { Body, Controller, Get, Post } from '@nestjs/common';
import { PistaService } from './pista.service';

@Controller('pista')
export class PistaController {
    
    constructor(private readonly pistaService: PistaService){}

    @Get ('mostrarPista')
    getPistas():any{
        return this.pistaService.getPistas();
    }
/*
    @Post('crear')
    crearPista(@Body() body):any{
        return this.pistaService.crearPista(body);
    }*/
}
