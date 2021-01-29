export interface AuthState {
    token: string | undefined;
    isAuthenticated: boolean | null;
    error: string | undefined;
    registered: boolean;
}
