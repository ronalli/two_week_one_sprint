import {Request, Response} from "express";

import {HTTP_STATUSES} from "../settings";
import {blogsRepositories} from "./blogsRepositories";
import {BlogDBType} from "../db/blog-types-db";
import {BodyTypeBlog} from "../types/request-response-type";

export const blogsControllers = {
    createBlog: (req: Request, res: Response) => {
        const inputDataBlog = req.body as BlogDBType
        const id = blogsRepositories.createBlog(inputDataBlog);
        if(id) {
            const blog: BlogDBType = blogsRepositories.findBlogById(id) as BlogDBType;
            res.status(HTTP_STATUSES.OK_200).send(blog)
        }
        res.status(HTTP_STATUSES.NOT_FOUND_404).send({})
    },
    getBlog: (req: Request, res: Response) => {
        res.status(HTTP_STATUSES.OK_200).send({})
    },
    getBlogs: (req: Request, res: Response) => {
        const findBlogs: BlogDBType[] = blogsRepositories.findAllBlogs();
        res.status(HTTP_STATUSES.OK_200).send(findBlogs)

    },
    updateBlog: (req: Request, res: Response) => {
        res.status(HTTP_STATUSES.OK_200).send({})
    },
    deleteBlog: (req: Request, res: Response) => {
        res.status(HTTP_STATUSES.OK_200).send({})
    },
}