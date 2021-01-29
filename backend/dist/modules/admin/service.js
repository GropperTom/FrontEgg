"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AdminModel_1 = require("./models/AdminModel");
const repository_1 = __importDefault(require("./repository"));
const getAllAdmins = async () => {
    try {
        return await repository_1.default.getAllAdmins();
    }
    catch (e) {
        throw new Error("");
    }
};
const setStatus = async (newStatus, name) => {
    try {
        await repository_1.default.setStatus(newStatus, name);
    }
    catch (e) {
        //
    }
};
const fillDbWithMock = async () => {
    const newRecords = [...Array(10).keys()].map(i => {
        const randomType = ["WORKING", "ON_VACATION", "LUNCH_TIME"][Math.floor(Math.random() * 3)];
        return new AdminModel_1.AdminModel({
            name: i.toString(),
            status: randomType
        });
    });
    // Recreate collection with newly generated records
    await AdminModel_1.AdminModel.insertMany(newRecords);
};
exports.default = {
    getAllAdmins,
    setStatus,
    fillDbWithMock
};
