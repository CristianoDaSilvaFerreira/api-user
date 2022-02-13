import { Controller, Get, Param } from '@nestjs/common';

@Controller('user')
export class UserController {

    // Lista todos usuários
    @Get()
    findAll() {
        return 'Lista todos os usuários';
    }

    // Listando um usuário
    @Get(':id')
    findOne(@Param() params) {
        return `Usuários #${params.id}`
    }
}
