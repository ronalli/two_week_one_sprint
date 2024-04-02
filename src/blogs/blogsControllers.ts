import {Request, Response} from "express";

import {HTTP_STATUSES} from "../settings";

export const blogsControllers = {
    createBlog: (req: Request, res: Response) => {
        res.status(HTTP_STATUSES.NO_CONTENT_204).send({})
    },
    getBlog: (req: Request, res: Response) => {
        res.status(HTTP_STATUSES.OK_200).send({})
    },
    getBlogs: (req: Request, res: Response) => {
        res.status(HTTP_STATUSES.OK_200).send({})
    },
    updateBlog: (req: Request, res: Response) => {
        res.status(HTTP_STATUSES.OK_200).send({})
    },
    deleteBlog: (req: Request, res: Response) => {
        res.status(HTTP_STATUSES.OK_200).send({})
    },
}