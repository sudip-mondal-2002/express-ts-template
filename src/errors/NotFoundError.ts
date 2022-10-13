import {CustomError} from "./CustomError";
import {HttpStatus} from "../enums";

export class NotFoundError extends CustomError {
    statusCode = HttpStatus.NOT_FOUND

    constructor(message='Not Found') {
        super(message)
        Object.setPrototypeOf(this, NotFoundError.prototype)
    }

    serializeErrors() {
        return [{message: this.message}]
    }
}