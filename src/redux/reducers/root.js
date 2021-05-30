import {combineReducers} from 'redux'
import {userDataReducer} from "./userData";
import {usersReducer} from "./users";

export const rootReducer = combineReducers({
    userData : userDataReducer,
    users : usersReducer,
})