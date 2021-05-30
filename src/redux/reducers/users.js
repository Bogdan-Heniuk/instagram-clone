const initialState = []

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USERS" :
            return action.payload
        case "SUBSCRIBE" :
            return action.payload
        default : return state
    }
}