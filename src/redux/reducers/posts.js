const initialState = []

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_POSTS" :
            return action.payload
        case "CLEAR_POSTS":
            return []
        default : return state
    }
}