import { Post } from './post.model';
export declare class PostsService {
    private posts;
    constructor();
    getAllPosts(): Post[];
    getPost(id: string): Post | undefined;
    createPost(postData: Post): Post;
    updatePost(id: string, postData: Post): Post;
    deletePost(id: string): void;
}
