import {AuthState} from "./types";
import {
    AuthActions,
    AuthActionType,
    LoginAction, RegisterAction,
} from "./actions/types";

const initialState: AuthState = {
    token: localStorage.getItem('token') || "",
    isAuthenticated: false,
    error: "",
    registered: false
}

const authReducer = (state: AuthState = initialState, action: AuthActionType): AuthState => {
    switch(action.type) {
        case AuthActions.LOGIN:
            return {
                ...state,
                token: (action as LoginAction).payload.token,
                error: (action as LoginAction).payload.error
            };
        case AuthActions.REGISTER:
            return {
                ...state,
                error: (action as RegisterAction).payload.error,
                registered: (action as RegisterAction).payload.registered
            };
        default:
            return state;
    }
}

export default authReducer;
