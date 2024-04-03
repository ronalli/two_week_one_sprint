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

 const validationWebsiteUrl = body('websiteUrl').trim().notEmpty().withMessage('Field websiteUrl is empty').isLength({min: 7, max: 100}).isURL().withMessage('Field is not url');


 export const validationCreateBlog = [validationTitle, validatorDescription, validationWebsiteUrl];

 export const inputValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
     const errors = validationResult(req).array({onlyFirstError: true});
     if(errors.length > 0) {
         res.status(HTTP_STATUSES.BED_REQUEST_400).send(errors)
         return;
     }
     next();
 }