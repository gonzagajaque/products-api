import { Delete, Get, Injectable, Param, Post, Put } from '@nestjs/common';
import { Produto } from './produto.model';

@Injectable()
export class ProdutosService {
  constructor(private produtosService: ProdutosService) {}

  @Get()
  obterTodos(): Produto[] {
    return this.produtosService.obterTodos();
  }
  @Get()
  obterUm(@Param() params): Produto {
    return this.produtosService.obterUm(params.id);
  }

  @Post()
  criar(produto: Produto) {
    this.produtosService.criar(produto);
  }

  @Put()
  alterar(produto: Produto): Produto {
    return this.produtosService.alterar(produto);
  }

  @Delete()
  apagar(@Param() params) {
    this.produtosService.apagar(params.id);
  }
}
