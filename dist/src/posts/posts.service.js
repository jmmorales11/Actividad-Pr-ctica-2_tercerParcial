"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let PostsService = class PostsService {
    constructor() {
        this.posts = [];
        this.createPost({
            id: (0, uuid_1.v4)(),
            title: 'Post 1',
            content: 'Contenido del post 1',
            comentario: 'hola',
        });
        this.createPost({
            id: (0, uuid_1.v4)(),
            title: 'Post 2',
            content: 'Contenido del post 2',
            comentario: 'hola',
        });
        this.createPost({
            id: (0, uuid_1.v4)(),
            title: 'Post 3',
            content: 'Contenido del post 3',
            comentario: 'hola',
        });
    }
    getAllPosts() {
        return this.posts;
    }
    getPost(id) {
        return this.posts.find((post) => post.id === id);
    }
    createPost(postData) {
        if (!postData.title || !postData.content) {
            throw new common_1.BadRequestException('Title and content are required');
        }
        const newPost = {
            id: (0, uuid_1.v4)(),
            title: postData.title,
            content: postData.content,
            comentario: postData.comentario,
        };
        this.posts.push(newPost);
        return newPost;
    }
    updatePost(id, postData) {
        const postIndex = this.posts.findIndex((post) => post.id === id);
        if (postIndex === -1) {
            throw new common_1.NotFoundException('Post not found');
        }
        this.posts[postIndex] = { ...this.posts[postIndex], ...postData };
        return this.posts[postIndex];
    }
    deletePost(id) {
        this.posts = this.posts.filter((post) => post.id !== id);
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PostsService);
//# sourceMappingURL=posts.service.js.map