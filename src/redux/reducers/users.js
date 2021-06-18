const initialState = []

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_RECOMMENDS" :
            return action.payload
        case "CLEAR_RECOMMENDS" :
            return []
        default : return state
    }
}