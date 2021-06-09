import {combineReducers} from 'redux'
import {userDataReducer} from "./userData";
import {usersReducer} from "./users";
import {searchedUsersReducer} from "./searchedUsers";
import {profileData} from "./profile";
import {postsReducer} from "./posts";
import {feedReducer} from "./feed";

export const rootReducer = combineReducers({
    userData : userDataReducer,
    users : usersReducer,
    searchedUsers : searchedUsersReducer,
    profile : profileData,
    posts : postsReducer,
    feed : feedReducer
})