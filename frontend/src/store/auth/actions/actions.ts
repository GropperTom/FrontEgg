import {Action, ThunkAction} from "@reduxjs/toolkit";
import {AuthState} from "../types";
import {AuthActions, LoginAction, RegisterAction, SetRegisteredAction} from "./types";
import authApi from "../../../modules/auth/api"
import {AuthDataDto} from "../../../modules/auth/api/dtos/AuthDataDto";

type AdminThunk = ThunkAction<void, AuthState, unknown, Action<AuthActions>>

const setRegistered = (registered: boolean): SetRegisteredAction => {
    return {
        type: AuthActions.SET_REGISTERED,
        payload: {
            registered: registered
        }
    };
};

const login = (email: string, password: string): AdminThunk => async (dispatch) => {
    try {
        const res: AuthDataDto = await authApi.login(email, password);
        dispatch<LoginAction>({
            type: AuthActions.LOGIN,
            payload: {
                token: res.token,
                error: res.msg
            }
        });
    }
    catch(e) {
        //
    }
}

const register = (email: string, password: string, name: string): AdminThunk => async (dispatch) => {
    try {
        const res: AuthDataDto = await authApi.register(email, password, name);
        dispatch<RegisterAction>({
            type: AuthActions.REGISTER,
            payload: {
                registered: true
            }
        });
    }
    catch(e) {
        dispatch<RegisterAction>({
            type: AuthActions.REGISTER,
            payload: {
                error: "error register",//e.response.data.msg,
                registered: true
            }
        });
    }
};

export default {
    setRegistered,
    login,
    register
};
