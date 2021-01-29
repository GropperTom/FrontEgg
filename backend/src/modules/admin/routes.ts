import {Router} from "express";
import controller from "./controller";
const AdminRouter = Router();

const basePath = '/admins';

AdminRouter.get('/', controller.getAllAdmins);
AdminRouter.put('/:name/status', controller.setStatus);
AdminRouter.post('/mock',controller.fillDbWithMock)

export default {
    router: AdminRouter,
    path: basePath
};
