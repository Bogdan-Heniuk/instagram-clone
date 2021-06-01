const initialState = []

export const searchedUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH" :
            return action.payload
        case "CLEAR" :
            return []
        default : return state
    }
}