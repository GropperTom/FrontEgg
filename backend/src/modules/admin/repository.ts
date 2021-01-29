import {AdminModel, IAdmin} from "./models/AdminModel";

const getAllAdmins = async (): Promise<IAdmin[]> => {
    try {
        return await AdminModel
            .find({})
    }
    catch (e) {
        throw new Error(""); // NOTE: maybe not needed
    }
};

const setStatus = async (newStatus: string, name: string): Promise<void> => {
    try {
        await AdminModel.findOneAndUpdate({name: name}, {$set: {status: newStatus}})
    }
    catch(e) {
        //TODO: come back to this because of any in promise. doesnt work without it.
    }
}

export default {
    getAllAdmins,
    setStatus
}
