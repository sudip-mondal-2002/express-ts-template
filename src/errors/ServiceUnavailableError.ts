import {CustomError} from "./CustomError";
import {HttpStatus} from "../enums";

export class ServiceUnavailableError extends CustomError {
    statusCode = HttpStatus.SERVER_UNAVAILABLE

    constructor(message='Service Unavailable') {
        super(message)
        Object.setPrototypeOf(this, ServiceUnavailableError.prototype)
    }

    serializeErrors() {
        return [{message: this.message}]
    }
}