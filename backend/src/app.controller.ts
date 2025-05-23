import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('content')
export class AppController {
  @Get()
  getContent() {
    return {
      title: 'Xin chào từ NestJS!',
      description: 'Đây là nội dung tĩnh trả về từ backend. My name is MinGayTo',
    };
  }
}