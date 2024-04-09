import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  public users: User[] = [
    {"id": 1, "name": "Sophia Williams", "age": 27, "email": "sophia.williams@example.com", "subscription": true},
    {"id": 2, "name": "Ethan Martinez", "age": 29, "email": "ethan.martinez@example.com", "subscription": false},
    {"id": 3, "name": "Olivia Johnson", "age": 31, "email": "olivia.johnson@example.com", "subscription": true},
    {"id": 4, "name": "Liam Davis", "age": 33, "email": "liam.davis@example.com", "subscription": false},
    {"id": 5, "name": "Ava Rodriguez", "age": 28, "email": "ava.rodriguez@example.com", "subscription": true},
    {"id": 6, "name": "Noah Wilson", "age": 30, "email": "noah.wilson@example.com", "subscription": false},
    {"id": 7, "name": "Emma Taylor", "age": 32, "email": "emma.taylor@example.com", "subscription": true},
    {"id": 8, "name": "James Anderson", "age": 26, "email": "james.anderson@example.com", "subscription": false},
    {"id": 9, "name": "Isabella Moore", "age": 34, "email": "isabella.moore@example.com", "subscription": true},
    {"id": 10, "name": "William Jackson", "age": 25, "email": "william.jackson@example.com", "subscription": false}
];

  getAllUsers() {
    return this.users;
  }
}
