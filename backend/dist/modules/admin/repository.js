"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AdminModel_1 = require("./models/AdminModel");
const getAllAdmins = async () => {
    try {
        return await AdminModel_1.AdminModel
            .find({});
    }
    catch (e) {
        throw new Error("");
    }
};
const setStatus = async (newStatus, name) => {
    try {
        await AdminModel_1.AdminModel.findOneAndUpdate({ name: name }, { $set: { status: newStatus } });
    }
    catch (e) {
    }
};
exports.default = {
    getAllAdmins,
    setStatus
};
