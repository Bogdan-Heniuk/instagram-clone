import {store} from "../store";

export const getUsers = () => async dispatch => {
    const token = store.getState().userData.token
    const response = await fetch(`http://localhost:8000/users`, {
        headers : {token}
    })

    const users = await response.json()

    dispatch({
        type : "GET_USERS",
        payload : users
    })
}

export const subscribeOnRecommends = (profile_id) => async dispatch => {
    const token = store.getState().userData.token

    await fetch(`http://localhost:8000/users/subscribe`, {
        method : "POST",
        headers : {
            'content-type' : 'application/json',
            token
        },
        body : JSON.stringify({
            profile_id
        })
    })

    dispatch(getUsers())
}

export const searchForUsers = (username) => async dispatch => {
    const response = await fetch(`http://localhost:8000/users/search`, {
        method : "POST",
        headers : {
            'content-type' : 'application/json',
        },
        body : JSON.stringify({
            username
        })
    })

    const users = await response.json()
    dispatch({
        type : "SEARCH",
        payload : users
    })
}

export const clearSearchedUsers = () => {
    return {
        type : "CLEAR"
    }
}