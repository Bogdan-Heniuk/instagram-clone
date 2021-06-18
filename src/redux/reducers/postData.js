const initialState = {}

export const postDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_POSTDATA" :
            return action.payload
        case "CLEAR_POSTDATA":
            return {}
        default : return state
    }
}