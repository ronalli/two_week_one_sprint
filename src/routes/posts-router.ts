import {Router} from 'express';
import {postsControllers} from "../posts/postsControllers";
import {validationCreatePost, validationPostMiddleware} from "../middleware/input-validation-post-middleware";

export const postsRouter = Router({});

postsRouter.get('/', postsControllers.getPosts)

postsRouter.get('/:id', postsControllers.getPost)

postsRouter.post('/', ...validationCreatePost, validationPostMiddleware, postsControllers.createPost)

postsRouter.put('/', postsControllers.updatePost)

postsRouter.delete('/', postsControllers.deletePost)