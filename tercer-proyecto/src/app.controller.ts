import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('saludar')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('despedir')
  getDespedir(): string{
    return this.appService.getDespedir();
  }
  
  @Post('crear')
  crearPersona(@Body() body):string{
    return this.appService.crearPersona(body);
  }

  @Get('listar')
  listarPersonar():string []{
    return this.appService.getListaPersona();
  }

  @Get('buscar/:id')
  getBuscarPersonaId(@Param() param):any{
    return this.appService.getBuscarPersonaId(param.id);
}
}