import {ValidationError} from "express-validator";
import {BadRequestError} from "./BadRequestError";

export class RequestValidationError extends BadRequestError {
    constructor(public errors: ValidationError[]) {
        super('Invalid request parameters')
        Object.setPrototypeOf(this, RequestValidationError.prototype)
    }

    serializeErrors() {
        return this.errors.map(err => {
            return {message: err.msg, field: err.param}
        })
    }
}