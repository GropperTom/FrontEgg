export enum AuthActions {
    REGISTER = "REGISTER",
    LOGIN = 'LOGIN',
    SET_REGISTERED = 'SET_REGISTERED'
}

export interface AuthAction {
    type: AuthActions;
}

export interface SetRegisteredAction extends AuthAction {
    payload: {
        registered: boolean;
    }
}

export interface RegisterAction extends AuthAction {
    payload: {
        error?: string;
        registered: boolean;
    }
}

export interface LoginAction extends AuthAction {
    payload: {
        token: string | undefined;
        error: string | undefined;
    }
}

export type AuthActionType =
    SetRegisteredAction
    | RegisterAction
    | LoginAction;
