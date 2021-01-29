import {AdminState, AdminStatusType} from "./types";
import {AdminAction, AdminActions, AdminActionType, FetchAllAdminsAction, SetStatusAction} from "./actions/types";

const initialState: AdminState = {
    user: {name: "Tom Gropper", status: "WORKING"},
    admins: []
}

const adminReducer = (state: AdminState = initialState, action: AdminActionType) => {
    switch(action.type) {
        case AdminActions.SET_STATUS:
            return {
                ...state,
                user: {...state.user, status: (action as SetStatusAction).payload.status}
            };
        case AdminActions.FETCH_ALL_ADMINS:
            return {
                ...state,
                admins: (action as FetchAllAdminsAction).payload.admins
            }
        default:
            return state;
    }
}

export default adminReducer;
