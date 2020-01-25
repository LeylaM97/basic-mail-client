import {combineReducers} from "redux";
import {mailReducer} from "./mails";

export const rootReducer =  combineReducers({
    mails: mailReducer
});