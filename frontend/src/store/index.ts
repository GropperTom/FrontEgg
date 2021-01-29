import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./root-reducer";

const initialState = {

};

const middleWare = thunk;

const rootStore = createStore(
    rootReducer,
    initialState,
    applyMiddleware(middleWare)
);


export default rootStore;
