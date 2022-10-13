import {CustomError} from "./CustomError";
import {HttpStatus} from "../enums";

export class UnauthorizedError extends CustomError {
    statusCode = HttpStatus.UNAUTHORIZED

    constructor(message='Not authorized') {
        super(message)
        Object.setPrototypeOf(this, UnauthorizedError.prototype)
    }

    serializeErrors() {
        return [{message: this.message}]
    }
}