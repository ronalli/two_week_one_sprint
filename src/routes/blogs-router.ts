import {Router} from 'express';
import {blogsControllers} from "../blogs/blogsControllers";
import {inputValidationMiddleware, validationCreateBlog} from "../middleware/input-validation-middleware";

export const blogsRouter = Router({});

blogsRouter.get('/', blogsControllers.getBlogs)
blogsRouter.get('/:id', blogsControllers.getBlog)
blogsRouter.post('/', ...validationCreateBlog, inputValidationMiddleware, blogsControllers.createBlog)
blogsRouter.put('/:id', blogsControllers.updateBlog)
blogsRouter.delete('/:id', blogsControllers.deleteBlog)