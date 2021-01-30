import {AuthState} from "./types";
import {AuthActions, AuthActionType, LoginAction, RegisterAction, SetRegisteredAction,} from "./actions/types";

const initialState: AuthState = {
    token: localStorage.getItem('token') || "",
    isAuthenticated: false,
    error: "",
    registered: false
}

const authReducer = (state: AuthState = initialState, action: AuthActionType): AuthState => {
    switch(action.type) {
        case AuthActions.LOGIN:
            const token = (action as LoginAction).payload.token;
            if (token) {
                localStorage.setItem("token", token);
            } else {
                localStorage.removeItem("token");
            }

            return {
                ...state,
                token: token,
                error: (action as LoginAction).payload.error
            };
        case AuthActions.REGISTER:
            return {
                ...state,
                error: (action as RegisterAction).payload.error,
                registered: (action as RegisterAction).payload.registered
            };
        case AuthActions.SET_REGISTERED:
            return {
                ...state,
                registered: (action as SetRegisteredAction).payload.registered
            };
        default:
            return state;
    }
}

export default authReducer;
