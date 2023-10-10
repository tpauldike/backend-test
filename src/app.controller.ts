import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserRequest } from './create-user-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test')
  checkServer(): object {
    return this.appService.checkServer();
  }

  @Post('/create-user')
  creatUser(@Body() createUserRequest: CreateUserRequest) {
    this.appService.createUser(createUserRequest);
  }

}
