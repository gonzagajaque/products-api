import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('racas')
export class RacasController {
  @Get()
  obterTodos(): string {
    return 'Lista de racas';
  }

  @Get(':id')
  obterUm(@Param() params): string {
    return `Retorna os dados das racas ${params.id}`;
  }

  @Post()
  criar(@Body() raca): string {
    return 'Raca criada';
  }

  @Put()
  alterar(@Body() raca): string {
    return 'Raca atualizada';
  }

  @Delete(':id')
  apagar(@Param() params): string {
    return `Apaga as racas ${params.id}`;
  }
}
