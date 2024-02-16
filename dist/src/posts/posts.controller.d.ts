import { PostsService } from './posts.service';
import { Post as PostModel } from './post.model';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    getAllPosts(): Promise<PostModel[]>;
    getPost(id: string): Promise<PostModel>;
    createPost(postData: PostModel): Promise<PostModel>;
    updatePost(id: string, postData: PostModel): Promise<PostModel>;
    deletePost(id: string): Promise<string>;
}
