"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = __importDefault(require("./service"));
const parseToDto = (admin) => {
    return {
        name: admin.name,
        status: admin.status
    };
};
const getAllAdmins = async (req, res, next) => {
    try {
        const admins = await service_1.default.getAllAdmins();
        const adminsDto = admins.map((admin) => parseToDto(admin));
        res.status(200).json(adminsDto);
    }
    catch (e) {
    }
};
const setStatus = async (req, res, next) => {
    try {
        await service_1.default.setStatus(req.body.status, req.params.name);
        res.status(200).json();
    }
    catch (e) {
        //
    }
};
const fillDbWithMock = async (req, res, next) => {
    try {
        await service_1.default.fillDbWithMock();
        res.status(200);
    }
    catch (e) {
        //
    }
};
exports.default = {
    getAllAdmins,
    setStatus,
    fillDbWithMock
};
