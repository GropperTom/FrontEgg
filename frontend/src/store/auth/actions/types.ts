export enum AuthActions {
    REGISTER = "REGISTER",
    LOGIN = 'LOGIN'
}

export interface AuthAction {
    type: AuthActions;
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
    RegisterAction
    | LoginAction;
