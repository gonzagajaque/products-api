import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Raca } from './raca.model';
@Controller('racas')
export class RacasController {
  racas: Raca[] = [
    new Raca('LIV01', 'livro TDD e BDD na prática', 29.9),
    new Raca('LIV02', 'Iniciando com Flutter', 39.9),
    new Raca('LIV03', 'Livro Inteligência Artificial como serviço', 29.9),
  ];

  @Get()
  obterTodos(): Raca[] {
    return this.racas;
  }

  @Get(':id')
  obterUm(@Param() params): Raca {
    return this.racas[0];
  }

  @Post()
  criar(@Body() raca: Raca) {
    raca.id = 100;
    this.racas.push(raca);
  }

  @Put()
  alterar(@Body() raca: Raca) {
    console.log(raca);

    return raca;
  }

  @Delete(':id')
  apagar(@Param() params) {
    this.racas.pop();
  }
}
