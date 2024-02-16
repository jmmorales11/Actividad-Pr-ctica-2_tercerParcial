import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostModel } from './post.model';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getAllPosts(): Promise<PostModel[]> {
    return this.postsService.getAllPosts();
  }

  @Get(':id')
  async getPost(@Param('id') id: string): Promise<PostModel> {
    const post = await this.postsService.getPost(id);
    if (!post) {
      throw new NotFoundException('Id No encontrado');
    }
    return post;
  }

  @Post()
  async createPost(@Body() postData: PostModel): Promise<PostModel> {
    try {
      if (!postData || Object.keys(postData).length === 0) {
        throw new BadRequestException('No se ha ingresado ningún dato ');
      }
      console.log('Received postData:', postData);
      return await this.postsService.createPost(postData);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException();
    }
  }

  @Put(':id')
  async updatePost(
    @Param('id') id: string,
    @Body() postData: PostModel,
  ): Promise<PostModel> {
    if (!postData.title && !postData.content) {
      throw new BadRequestException(
        'El id que ingreso no existe',
      );
    }
    return this.postsService.updatePost(id, postData);
  }

  @Delete(':id')
async deletePost(@Param('id') id: string): Promise<string> {
  // Verificar si el post existe antes de intentar eliminarlo
  const post = await this.postsService.getPost(id);
  if (!post) {
    throw new NotFoundException(`No se encontró ningún post con el ID ${id}`);
  }

  // Si el post existe, proceder con la eliminación
  const deleted = await this.postsService.deletePost(id);
  return `Post con ID ${id} eliminado exitosamente`;
}


}
