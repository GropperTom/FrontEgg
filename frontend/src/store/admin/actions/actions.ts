import {Action, ThunkAction} from "@reduxjs/toolkit";
import {AdminState, AdminStatusType} from "../types";
import {AdminActions, FetchAllAdminsAction, SetStatusAction} from "./types";
import adminApi from "../../../modules/admin/api"
import {AdminDataDto} from "../../../modules/admin/api/dtos/AdminDataDto";

type AdminThunk = ThunkAction<void, AdminState, unknown, Action<AdminActions>>

const fetchAllAdmins = (): AdminThunk => async (dispatch) => {
    try {
        const res: AdminDataDto[] = await adminApi.fetchAllAdmins();
        dispatch<FetchAllAdminsAction>({
            type: AdminActions.FETCH_ALL_ADMINS,
            payload: {
                admins: res
            }
        });
    }
    catch(e) {
        // NOTE: add handling?
    }
}

//TODO: continue this
// const fetchAdmin = ():AdminThunk => async (dispatch) => {
//     try {
//         const res: AdminDataDto = await adminApi.
//     }
// }

const setStatus = (newStatus: keyof typeof AdminStatusType, name: string): AdminThunk => async (dispatch) => {
    try {
        await adminApi.setStatus(newStatus, name);
        dispatch<SetStatusAction>({
            type: AdminActions.SET_STATUS,
            payload: {
                status: newStatus
            }
        });
    }
    catch(e) {
        //
    }
}

export default {
    setStatus,
    fetchAllAdmins
};
