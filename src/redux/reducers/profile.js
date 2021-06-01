const initialState = {}

export const profileData = (state = initialState, action) => {
    switch (action.type) {
        case "GET" :
            return action.payload
        default : return state
    }
}