import {Router} from 'express';
import {postsControllers} from "../posts/postsControllers";

export const postsRouter = Router({});

postsRouter.get('/', postsControllers.getPosts)

postsRouter.get('/:id', postsControllers.getPost)

postsRouter.post('/', postsControllers.createPost)

postsRouter.put('/', postsControllers.updatePost)

postsRouter.delete('/', postsControllers.deletePost)