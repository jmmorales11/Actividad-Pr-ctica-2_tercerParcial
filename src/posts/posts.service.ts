import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Post } from './post.model';

@Injectable()
export class PostsService {
  private posts: Post[] = [];

  constructor() {
    // Agregar algunos posts de prueba al iniciar la aplicación
    this.createPost({
      id: uuidv4(),
      title: 'Post 1',
      content: 'Contenido del post 1',
      comentario:'hola',
    });
    this.createPost({
      id: uuidv4(),
      title: 'Post 2',
      content: 'Contenido del post 2',
      comentario:'hola',
    });
    this.createPost({
      id: uuidv4(),
      title: 'Post 3',
      content: 'Contenido del post 3',
      comentario:'hola',
    });
  }

  getAllPosts(): Post[] {
    return this.posts;
  }

  getPost(id: string): Post | undefined {
    return this.posts.find((post) => post.id === id);
  }

  createPost(postData: Post): Post {
    if (!postData.title || !postData.content) {
      throw new BadRequestException('Title and content are required');
    }

    const newPost: Post = {
      id: uuidv4(),
      title: postData.title,
      content: postData.content,
      comentario:postData.comentario,
    };

    this.posts.push(newPost);
    return newPost;
  }

  updatePost(id: string, postData: Post): Post {
    const postIndex = this.posts.findIndex((post) => post.id === id);
    if (postIndex === -1) {
      throw new NotFoundException('Post not found');
    }

    this.posts[postIndex] = { ...this.posts[postIndex], ...postData };

    return this.posts[postIndex];
  }

  deletePost(id: string): void {
    this.posts = this.posts.filter((post) => post.id !== id);
  }
}
