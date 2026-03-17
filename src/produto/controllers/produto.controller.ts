import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { Produto } from "../entities/produto.entity";
import { ProdutoService } from "../services/produto.service";

@ApiTags('Produto')
@Controller("/produtos")
@ApiBearerAuth()
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Produto[]> {
    return this.produtoService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
    return this.produtoService.findById(id);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findByNome(@Param('nome') nome: string): Promise<Produto[]> {
    return this.produtoService.findByNome(nome);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() produto: Produto): Promise<Produto> {
    return this.produtoService.create(produto);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() produto: Produto): Promise<Produto> {
    return this.produtoService.update(produto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.produtoService.delete(id);
  }

  @Get('/preco_maior/:preco')
  @HttpCode(HttpStatus.OK)
  findByPrecoMaior(@Param('preco', ParseIntPipe) preco: number): Promise<Produto[]> {
    return this.produtoService.findByPrecoMaior(preco);
  }

  @Get('/preco_menor/:preco')
  @HttpCode(HttpStatus.OK)
  findByPrecoMenor(@Param('preco', ParseIntPipe) preco: number): Promise<Produto[]> {
    return this.produtoService.findByPrecoMenor(preco);
  }
}