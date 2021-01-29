import {AdminModel, IAdmin} from "./models/AdminModel";

const getAllAdmins = async (): Promise<IAdmin[]> => {
    try {
        return await AdminModel
            .find({})
    }
    catch (e) {
        throw new Error("");
    }
};

const setStatus = async (newStatus: string, name: string): Promise<void> => {
    try {
        await AdminModel.findOneAndUpdate({name: name}, {$set: {status: newStatus}})
    }
    catch(e) {
    }
}

export default {
    getAllAdmins,
    setStatus
}
