const initialState = []

export const feedReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CLEAR_FEED":
            return []
        case "GET_FEED" :
            return action.payload
        default : return state
    }
}