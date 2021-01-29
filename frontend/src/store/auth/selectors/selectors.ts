import {RootState} from "../../root-reducer";

const getToken = (state: RootState): string | undefined => state.authReducer.token;
const getRegistered = (state: RootState): boolean => state.authReducer.registered

export default {
    getToken,
    getRegistered
}
