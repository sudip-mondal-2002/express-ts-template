import {CustomError} from "./CustomError";
import {HttpStatus} from "../enums";

export class ForbiddenError extends CustomError {
    statusCode = HttpStatus.FORBIDDEN

    constructor(message='Forbidden') {
        super(message)
        Object.setPrototypeOf(this, ForbiddenError.prototype)
    }

    serializeErrors() {
        return [{message: this.message}]
    }
}