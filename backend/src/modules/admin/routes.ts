import {Router} from "express";
import controller from "./controller";
import jwtFilter from "../auth/middleware/jwt_filter"
const AdminRouter = Router();

const basePath = '/admins';

AdminRouter.get('/', controller.getAllAdmins);
AdminRouter.put('/:name/status', controller.setStatus);
AdminRouter.post('/mock',controller.fillDbWithMock)

export default {
    router: AdminRouter,
    path: basePath
};
