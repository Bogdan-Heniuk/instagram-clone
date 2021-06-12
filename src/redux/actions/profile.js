import {store} from "../store";
import axios from "axios";

const unfollow = async (profile_id) => {
    const token = store.getState().userData.token
    await axios.post(`http://localhost:8000/users/unsubscribe` ,{profile_id},{
        headers : {
            'content-type' : 'application/json',
            token
        },
    })
}

const follow = async (profile_id) => {
    const token = store.getState().userData.token
    await axios.post(`http://localhost:8000/users/subscribe` ,{profile_id},{
        headers : {
            'content-type' : 'application/json',
            token
        },
    })
}
export const getProfile = (profile_username) => async dispatch => {
    const token = store.getState().userData.token
    const response = await axios.post(`http://localhost:8000/users/profile` , {profile_username},{
        headers : {
            token
        },
    })

    const profileData = await response.data

    dispatch({
        type : "GET",
        payload : profileData
    })
}

export const followProfile = (profile_id, profile_username) => async dispatch => {
    await follow(profile_id)
    dispatch(getProfile(profile_username))
}


export const unfollowProfile = (profile_id, profile_username) => async dispatch => {
    await unfollow(profile_id)
    dispatch(getProfile(profile_username))
}

export const clearProfile = () => {
    return {
        type : "CLEAR_PROFILE"
    }
}