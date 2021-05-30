import {store} from "../store";


export const getUsers = () => async dispatch => {
    const token = store.getState().userData.token
    const response = await fetch(`http://localhost:8000/users`, {
        headers : {
            token,
        }
    })
    const users = await response.json()
    // const usersModified = users.map(user => {
    //     return {...user, subscribed : false}
    // })

    dispatch({
        type : "GET_USERS",
        payload : users
    })
}

export const subscribe = (subscribed_id) => async dispatch => {
    const token = store.getState().userData.token

    const response = await fetch(`http://localhost:8000/users/subscribe`, {
        method : "POST",
        headers : {
            'content-type' : 'application/json',
            token,
        },
        body : JSON.stringify({
            subscribed_id
        })
    })

    dispatch(getUsers())
}