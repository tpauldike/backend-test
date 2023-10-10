import { Inject, Injectable } from '@nestjs/common';
import { CreateUserRequest } from './create-user-request.dto';
import { CreateUserEvent } from './create-user.event';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  private readonly users: any[] = [];

  constructor(
    @Inject('NOTIFICATION') private readonly notificationClient: ClientProxy,
  ) {}

  checkServer(): object {
    return { msg: 'Backend server is up and running' };
  }

  createUser(createUserRequest: CreateUserRequest) {
    this.users.push(createUserRequest);
    this.notificationClient.emit(
      'user_created',
      new CreateUserEvent(createUserRequest.email),
    );
  }
}
