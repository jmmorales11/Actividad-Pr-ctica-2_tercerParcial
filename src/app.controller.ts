// posts.controller.ts

import { Controller, Get } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  findAll(): string {
    return 'This endpoint returns all posts';
  }
}
