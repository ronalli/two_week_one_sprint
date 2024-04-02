import {Request, Response} from 'express'

import {HTTP_STATUSES} from "../settings";

export const postsControllers = {
    createPost: (req: Request, res: Response) => {
        res.status(HTTP_STATUSES.OK_200).send({})},
    getPost: (req: Request, res: Response) => {
        res.status(HTTP_STATUSES.OK_200).send({})},
    getPosts: (req: Request, res: Response) => {
        res.status(HTTP_STATUSES.OK_200).send({})},
    updatePost: (req: Request, res: Response) => {
        res.status(HTTP_STATUSES.OK_200).send({})},
    deletePost: (req: Request, res: Response) => {
        res.status(HTTP_STATUSES.OK_200).send({})},
}

