import {CustomError} from "./CustomError";
import {HttpStatus} from "../enums";

export class BadRequestError extends CustomError {
    statusCode = HttpStatus.BAD_REQUEST

    constructor(message='Bad Request', private field?: string) {
        super(message)
        Object.setPrototypeOf(this, BadRequestError.prototype)
    }

    serializeErrors() {
        return [{message: this.message, field: this.field}]
    }
}