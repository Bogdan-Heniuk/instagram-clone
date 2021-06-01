export const getProfile = (id) => async dispatch => {
    const response = await fetch(`http://localhost:8000/users/profile/${id}`)

    const profileData = await response.json()

    dispatch({
        type : "GET",
        payload : profileData
    })
}