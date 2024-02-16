import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module'; // Importa el módulo de posts

@Module({
  imports: [PostsModule], // Importa el módulo de posts
})
export class AppModule {}
