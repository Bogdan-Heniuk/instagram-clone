export const getUsers = (token) => async dispatch => {
    const response = await fetch(`http://localhost:8000/users`, {
        headers : {
            token,
        }
    })
    const users = await response.json()

    dispatch({
        type : "GET_USERS",
        payload : users
    })
}