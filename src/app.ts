import express from 'express'
import cors from 'cors'
import "express-async-errors"
import {errorHandler} from "./middlewares";
import {NotFoundError} from "./errors";

export const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// Import all routes
import {authRouter} from './routes'

// Use all routes
app.use(authRouter)


app.all('*',  () => {
    throw new NotFoundError("Route not found")
})
app.use(errorHandler)
