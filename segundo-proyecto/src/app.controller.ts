import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/saludoIngles')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/saludoEspanol')
  getHola(): string {
    return this.appService.getHola();
  }
}
