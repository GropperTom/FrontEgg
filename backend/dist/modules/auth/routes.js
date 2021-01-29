"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
const express_validator_1 = require("express-validator");
const authRouter = express_1.Router();
const basePath = '/auth';
authRouter.post('/register', [
    express_validator_1.check('email', 'invalid username')
        .isEmail,
    express_validator_1.check('password', 'invalid password')
        .isLength({ min: 6 }),
    express_validator_1.check('name', 'invalid name')
        .not()
        .isEmpty()
], controller_1.default.registerNewUser);
authRouter.post('/login', [
    express_validator_1.check('email', 'invalid username')
        .isEmail,
    express_validator_1.check('password', 'invalid password')
        .isLength({ min: 6 })
], controller_1.default.login);
exports.default = {
    router: authRouter,
    path: basePath
};
