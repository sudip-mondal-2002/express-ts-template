import {ServiceUnavailableError} from "./ServiceUnavailableError";

export class DatabaseConnectionError extends ServiceUnavailableError {
    constructor(message='Database Unavailable') {
        super(message)
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
    }

    serializeErrors() {
        return [{message: this.message}]
    }
}