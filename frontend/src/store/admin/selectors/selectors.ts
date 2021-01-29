import {RootState} from "../../root-reducer";
import {AdminData} from "../types";

const getUser = (state: RootState): AdminData => state.adminReducer.user;
const getAdmins = (state: RootState): AdminData[] => state.adminReducer.admins

export default {
    getUser,
    getAdmins
}
