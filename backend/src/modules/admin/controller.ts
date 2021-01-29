import {RequestHandler} from "express";
import service from "./service";
import {IAdmin} from "./models/AdminModel";
import AdminDataDto from "./dto/AdminDataDto";

const parseToDto = (admin: IAdmin): AdminDataDto => {
    return {
        name: admin.name,
        status: admin.status
    }
}

const getAllAdmins: RequestHandler = async (req, res, next) => {
    try {
        const admins: IAdmin[] = await service.getAllAdmins();
        const adminsDto: AdminDataDto[] = admins.map((admin) => parseToDto(admin));

        res.status(200).json(adminsDto);
    }
    catch(e) {
    }
}

const setStatus: RequestHandler = async (req, res, next) => {
    try {
        await service.setStatus(req.body.status, req.params.name);
        res.status(200).json();
    }
    catch(e) {
        //
    }
}

const fillDbWithMock: RequestHandler = async (req, res, next) => {
    try {
        await service.fillDbWithMock();
        res.status(200);
    }
}

export default {
    getAllAdmins,
    setStatus,
    fillDbWithMock
}
