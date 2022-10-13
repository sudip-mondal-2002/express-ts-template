import {BadRequestError, UnauthorizedError} from "../errors";
import {User} from "../entities/UserEntity";
import {AppDataSource} from "../ormconfig"
import bcrypt from "bcrypt";
import {Request, Response} from "express";
import {HttpHeaders} from "../enums/HttpHeaders";
import jwt from "jsonwebtoken";

const userRepository = AppDataSource.getRepository(User);
export const signup = async (req: Request, res: Response) => {
    const {email, password, name} = req.body
    const existingUser = await userRepository.findOne({
        where: {
            email
        }
    })
    if (existingUser) {
        throw new BadRequestError("Email in use", "email")
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = new User(email, hashedPassword, name)
    await userRepository.save(user)

    const userJwt = jwt.sign({
        id: user.id,
        email: user.email,
        name: user.name
    }, process.env.JWT_KEY!)

    res.status(201).set(HttpHeaders.AUTHORIZATION, userJwt).json(user)
}

export const signin = async (req: Request, res: Response) => {
    const {email, password} = req.body
    const existingUser = await userRepository.findOne({
        where: {
            email
        }
    })
    if (!existingUser) {
        throw new UnauthorizedError()
    }
    const passwordsMatch = await bcrypt.compare(password, existingUser.password)
    if (!passwordsMatch) {
        throw new UnauthorizedError()
    }
    const userJwt = jwt.sign({
        id: existingUser.id,
        email: existingUser.email,
        name: existingUser.name
    }, process.env.JWT_KEY!)

    res.status(200).set(HttpHeaders.AUTHORIZATION, userJwt).json(existingUser)
}