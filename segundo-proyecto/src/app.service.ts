import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return { saludo: 'Hello Melina!' };
  }
  getHola(): any {
    return { saludo: 'Hola Melina!' };
  }
}


