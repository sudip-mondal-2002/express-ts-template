import {RequestValidationError} from "../errors"
import {validationResult} from "express-validator";
import {Request, Response, NextFunction} from "express";

export const requestValidator = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        throw new RequestValidationError(errors.array())
    }
    next()
}