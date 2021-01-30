import {AdminState} from "./types";
import {AdminActions, AdminActionType, FetchAdminAction, FetchAllAdminsAction, SetStatusAction} from "./actions/types";

const initialState: AdminState = {
    user: {name: "", status: "WORKING", email: ""},
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
        case AdminActions.FETCH_ME:
            return {
                ...state,
                user: (action as FetchAdminAction).payload.user
            }
        default:
            return state;
    }
}

export default adminReducer;
