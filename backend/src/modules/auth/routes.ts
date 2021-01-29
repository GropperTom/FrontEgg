import {Router} from "express";
import controller from "./controller";
import {check} from "express-validator";

const authRouter = Router();

const basePath = '/auth';

authRouter.post('/register', [
    check('email', 'invalid username')
        .isEmail,
    check('password', 'invalid password')
        .isLength({min: 6}),
    check('name', 'invalid name')
        .not()
        .isEmpty()
],controller.registerNewUser)

authRouter.post('/login', [
    check('email', 'invalid username')
        .isEmail,
    check('password', 'invalid password')
        .isLength({min: 6})
],controller.login)

export default {
    router: authRouter,
    path: basePath
};
