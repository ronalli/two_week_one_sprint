import {Response, Request, NextFunction} from 'express'
import {body, validationResult} from 'express-validator'
import {HTTP_STATUSES} from "../settings";
import {blogsControllers} from "../blogs/blogsControllers";
import {blogsRepositories} from "../blogs/blogsRepositories";

const validationTitle = body('title').trim().notEmpty().withMessage('Field title is empty').isLength({
    min: 3,
    max: 30
}).withMessage('Title filed should be from 3 to 15 symbols');

const validationShortDescription = body('shortDescription').trim().notEmpty().withMessage('Field shortDescription is empty').isLength({
    min: 5,
    max: 100
}).withMessage('ShortDescription filed should be from 5 to 100 symbols');

const validationContent = body('content').trim().notEmpty().withMessage('Field content is empty').isLength({
    min: 20,
    max: 1000
}).withMessage('Content filed should be from 20 to 1000 symbols')

const validationBlogId = body('blogId').trim().notEmpty().withMessage('Field blogId is empty').isString().withMessage('Field blogId is not correct type').custom(value => {
    const isValidBlogId = blogsRepositories.findBlogById(value);
    return !!isValidBlogId;
})

export const validationCreatePost = [validationBlogId, validationTitle, validationShortDescription, validationContent];

export const validationPostMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req).array({onlyFirstError: true})
    if (errors.length > 0) {
        res.status(HTTP_STATUSES.BED_REQUEST_400).send(errors)
        return;
    }
    next();
}