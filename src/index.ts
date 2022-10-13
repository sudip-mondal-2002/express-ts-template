const PORT = process.env.PORT || 3000

import {app} from './app'
import {createServer} from 'http'
import dotenv from 'dotenv'
dotenv.config()

if(process.env.JWT_KEY === undefined) {
    if(process.env.NODE_ENV === "production") {
        throw new Error("JWT_KEY must be defined")
    } else {
        process.env.JWT_KEY = "dev"
    }
}

createServer(app).listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})