import {Router} from 'express';
import {blogsControllers} from "../blogs/blogsControllers";
import {inputValidationBlogMiddleware, validationCreateBlog} from "../middleware/input-validation-blog-middleware";

export const blogsRouter = Router({});

blogsRouter.get('/', blogsControllers.getBlogs)
blogsRouter.get('/:id', blogsControllers.getBlog)
blogsRouter.post('/', ...validationCreateBlog, inputValidationBlogMiddleware, blogsControllers.createBlog)
blogsRouter.put('/:id', blogsControllers.updateBlog)
blogsRouter.delete('/:id', blogsControllers.deleteBlog)