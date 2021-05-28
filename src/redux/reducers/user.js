const initialState = {
    username : null,
    password : null,
    email : null,
    name : null,
    loggedIn : false,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN" :
            return action.payload
        default : return state
    }
}