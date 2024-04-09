import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';


@Injectable()
export class SubService {
  
  constructor(private readonly httpService: HttpService) {}

  async check(id: number): Promise<boolean> {
    const response = await this.httpService.get('http://localhost:3000/users').toPromise();
    const users: User[] = response.data;
    const user = users.find((user) => user.id === id);
    if (!user) {
      return false;
    }
  return user.subscription;
  }
}
