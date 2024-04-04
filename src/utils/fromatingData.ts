import {ValidationError} from 'express-validator'
import {OutputErrorsType} from "../types/output-errors-type";


export const formatingDataErrors = (array: {path: string, msg: string}[]) => {
    const errors: OutputErrorsType = {
        errorsMessages: []
    }
    array.map(item => {
        errors.errorsMessages.push({message: item.msg, field: item.path})
    });
    return errors;
}