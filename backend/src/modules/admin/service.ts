import {IAdmin, AdminModel, adminSchema} from "./models/AdminModel";
import adminRepo from "./repository"

const getAllAdmins = async (): Promise<IAdmin[]> => {
    try {
        return await adminRepo.getAllAdmins()
    }
    catch(e) {
        throw new Error(""); // NOTE: may not be needed
    }
}

// TODO: i put any again in promise
const setStatus = async (newStatus: string, name: string): Promise<any> => {
    try {
        await adminRepo.setStatus(newStatus, name);
    }
    catch(e) {
        //
    }
}

const fillDbWithMock = async (): Promise<any> => {
    const newRecords: IAdmin[] = [...Array(10).keys()].map(i => {
        const randomType = ["WORKING", "ON_VACATION", "LUNCH_TIME"][Math.floor(Math.random() * 3)];

        return new AdminModel({
            name: i.toString(),
            status: randomType
        });
    });

    // Recreate collection with newly generated records
    await AdminModel.insertMany(newRecords);
}

export default {
    getAllAdmins,
    setStatus,
    fillDbWithMock
}
