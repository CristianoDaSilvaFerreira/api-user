import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'Cristiano Ferreira',
      password: '123456',
      phone: '+5523983837676',
    },
  ];

  // Função findAll()
  findAll() {
    return this.users;
  }

  // Função findOne
  findOne(id: string) {
    return this.users.find((user: User) => user.id === Number(id));
  }

  // Função create()
  create(createUserDto: any) {
    this.users.push(createUserDto);
  }

  // Função update()
  update(id: string, updateUserDto: any) {
    const indexUser = this.users.findIndex(
      (user: User) => user.id === Number(id),
    );

    this.users[indexUser] = updateUserDto;
  }

  //   Função remove()
  remove(id: string) {
    const indexUser = this.users.findIndex(
      (user: User) => user.id === Number(id),
    );

    if (indexUser >= 0) {
      this.users.splice(indexUser, 1);
    }
  }
}
