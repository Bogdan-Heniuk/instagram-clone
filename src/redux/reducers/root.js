import {combineReducers} from 'redux'
import {userDataReducer} from "./userData";
import {usersReducer} from "./users";
import {searchedUsersReducer} from "./searchedUsers";
import {profileData} from "./profile";
import {feedReducer} from "./feed";
import {postDataReducer} from "./postData";

export const rootReducer = combineReducers({
    userData : userDataReducer,
    usersRecommends : usersReducer,
    searchedUsers : searchedUsersReducer,
    profile : profileData,
    feed : feedReducer,
    postData : postDataReducer
})