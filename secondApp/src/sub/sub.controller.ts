import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { SubService } from './sub.service';

@Controller('sub')
export class SubController {
  constructor(private readonly subService: SubService) {}

  @Post()
  async check(@Body() body: any) { 
    try {
      const id = body.id;
      const user = await this.subService.check(id);
      return user;
    } catch (error) {
      throw new HttpException('Error checking authentication', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
