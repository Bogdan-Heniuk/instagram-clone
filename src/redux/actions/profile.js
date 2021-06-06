import {store} from "../store";
import axios from "axios";
export const getProfile = (profile_id) => async dispatch => {
    const token = store.getState().userData.token
    const response = await axios.post(`http://localhost:8000/users/profile` , {profile_id},{
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

export const followProfile = (profile_id) => async dispatch => {
    const token = store.getState().userData.token
    await axios.post(`http://localhost:8000/users/subscribe` ,{profile_id},{
        headers : {
            'content-type' : 'application/json',
            token
        },
    })

    dispatch(getProfile(profile_id))

}

export const unfollowProfile = (profile_id) => async dispatch => {
    const token = store.getState().userData.token
    await axios.post(`http://localhost:8000/users/unsubscribe` ,{profile_id},{
        headers : {
            'content-type' : 'application/json',
            token
        },
    })

    dispatch(getProfile(profile_id))
}

export const clearProfile = () => {
    return {
        type : "CLEAR_PROFILE"
    }
}