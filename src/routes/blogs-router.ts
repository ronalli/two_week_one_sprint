import {Router} from 'express';
import {blogsControllers} from "../blogs/blogsControllers";
import {inputValidationBlogMiddleware, validationCreateBlog} from "../middleware/input-validation-blog-middleware";
import {authMiddleware} from "../middleware/auth-middleware";

export const blogsRouter = Router({});

blogsRouter.get('/', blogsControllers.getBlogs)
blogsRouter.get('/:id', blogsControllers.getBlog)
blogsRouter.post('/', authMiddleware, ...validationCreateBlog, inputValidationBlogMiddleware, blogsControllers.createBlog)
blogsRouter.put('/:id', ...validationCreateBlog, inputValidationBlogMiddleware, blogsControllers.updateBlog)
blogsRouter.delete('/:id', blogsControllers.deleteBlog)