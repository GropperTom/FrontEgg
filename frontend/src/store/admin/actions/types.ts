import {AdminData, AdminStatusType} from "../types";

export enum AdminActions {
    SET_STATUS = 'SET_STATUS',
    FETCH_ALL_ADMINS = 'FETCH_ALL_ADMINS',
    FETCH_ME = "FETCH_ME"
}

export interface AdminAction {
    type: AdminActions;
}

export interface SetStatusAction extends AdminAction {
    payload: {
        status: keyof typeof AdminStatusType
    }
}

export interface FetchAllAdminsAction extends AdminAction {
    payload: {
        admins: AdminData[]
    }
}

export interface FetchAdminAction extends AdminAction {
    payload: {
        user: AdminData;
    }
}

export type AdminActionType =
    SetStatusAction
    | FetchAllAdminsAction
    | FetchAdminAction;
