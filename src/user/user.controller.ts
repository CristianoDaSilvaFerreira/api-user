import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { response } from 'express';

@Controller('user')
export class UserController {
  // Lista todos usuários
  @Get()
  findAll(@Res() response) {
    return response.status(200).send('Lista todos os usuários');
  }

  // Listando um usuário
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Usuários #${id}`;
  }

  // Criando usuário
  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() body) {
    return body;
  }

    //   Autulizando usuário
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
      return `Atualizando o usuário #${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
      return `Usuário #${id} removido com sucesso!`
  }
}
