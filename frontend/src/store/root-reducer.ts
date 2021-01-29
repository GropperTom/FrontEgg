import {combineReducers} from "redux";
import adminReducer from "./admin/reducer";
import authReducer from "./auth/reducer";

export const rootReducer = combineReducers({
    authReducer,
    adminReducer
});

export type RootState = ReturnType<typeof rootReducer>
