import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1>First steps on Nest JS</h1><p>This is local api for todo-list-app.</p>';
  }
}
