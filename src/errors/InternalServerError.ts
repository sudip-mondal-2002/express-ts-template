import {CustomError} from "./CustomError";
import {HttpStatus} from "../enums";

export class InternalServerError extends CustomError {
    statusCode = HttpStatus.INTERNAL_SERVER_ERROR

    constructor(message='Internal Server Error') {
        super(message)
        Object.setPrototypeOf(this, InternalServerError.prototype)
    }

    serializeErrors() {
        return [{message: 'Internal Server Error'}]
    }
}