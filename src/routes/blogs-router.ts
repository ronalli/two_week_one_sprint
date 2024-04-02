import {Router} from 'express';
import {blogsControllers} from "../blogs/blogsControllers";

export const blogsRouter = Router({});

blogsRouter.get('/', blogsControllers.getBlogs)
blogsRouter.get('/:id', blogsControllers.getBlog)
blogsRouter.post('/', blogsControllers.createBlog)
blogsRouter.put('/:id', blogsControllers.updateBlog)
blogsRouter.delete('/:id', blogsControllers.deleteBlog)