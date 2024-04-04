import {Response, Request, NextFunction} from 'express'
import {body, validationResult} from 'express-validator'
import {HTTP_STATUSES} from "../settings";

const validationTitle = body('name').trim().notEmpty().withMessage('Field name is empty').isLength({
    min: 3,
    max: 15
}).withMessage('Name filed should be from 3 to 15 symbols');

const validatorDescription = body('description').trim().notEmpty().withMessage('Field description is empty').isLength({
    min: 15,
    max: 500
}).withMessage('Description filed should be from 15 to 500 symbols');

const validationWebsiteUrl = body('websiteUrl').trim().notEmpty().withMessage('Field websiteUrl is empty').isLength({
    min: 7,
    max: 100
}).custom((value) => {
    const regexp = new RegExp('^https:\/\/([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$', 'g');
    return regexp.test(value);
}).withMessage('Field is not correct url');


export const validationCreateBlog = [validationTitle, validatorDescription, validationWebsiteUrl];


