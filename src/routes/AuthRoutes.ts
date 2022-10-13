import {Router} from "express";
import {signup, signin} from "../controllers";
import {requestValidator} from "../middlewares";
import {body} from "express-validator";

const router = Router();

router.post('/signup', [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim().isLength({min: 4, max: 20}).withMessage('Password must be between 4 and 20 characters'),
    body('name').trim().notEmpty().withMessage('Name must be provided')
], requestValidator, signup)

router.post('/signin', [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim().notEmpty().withMessage('Password must be provided')
], requestValidator, signin)

export {router as authRouter};