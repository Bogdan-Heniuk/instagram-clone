const initialState = {}

export const profileData = (state = initialState, action) => {
    switch (action.type) {
        case "GET" :
            return action.payload
        case "CLEAR_PROFILE":
            return {}
        default : return state
    }
}