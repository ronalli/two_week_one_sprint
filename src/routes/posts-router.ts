import {Router} from 'express';
import {postsControllers} from "../posts/postsControllers";
import {validationCreatePost, validationPostMiddleware} from "../middleware/input-validation-post-middleware";
import {authMiddleware} from "../middleware/auth-middleware";

export const postsRouter = Router({});

postsRouter.get('/', postsControllers.getPosts)

postsRouter.get('/:id', postsControllers.getPost)

postsRouter.post('/', authMiddleware, ...validationCreatePost, validationPostMiddleware, postsControllers.createPost)

postsRouter.put('/', authMiddleware, ...validationCreatePost, validationPostMiddleware, postsControllers.updatePost)

postsRouter.delete('/', authMiddleware, postsControllers.deletePost)