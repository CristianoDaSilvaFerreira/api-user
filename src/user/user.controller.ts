import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('user')
export class UserController {

    // Lista todos usuários
    @Get()
    findAll() {
        return 'Lista todos os usuários';
    }

    // Listando um usuário
    @Get(':id')
    findOne(@Param('id') id: string) {
        return `Usuários #${id}`
    }

    @Post()
    create(@Body() body) {
        return body;
    }
}
