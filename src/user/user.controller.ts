import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';
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
        return `Usuários #${id}`
    }

    // Criando usuário
    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body() body) {
        return body;
    }
}
