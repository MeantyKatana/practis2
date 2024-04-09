import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly httpService: HttpService) {}

  async check(email: string): Promise<User> { 
      const response = await this.httpService.get('http://localhost:3000/users').toPromise();
      const users: User[] = response.data;
      const user = users.find((user) => user.email === email);
      if (!user) {
        throw new NotFoundException(`Користувач з таким поштовим адресом : ${email} не знайдений`);
      }
    return user;
  }
}
