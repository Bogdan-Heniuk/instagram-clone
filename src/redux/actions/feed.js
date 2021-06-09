import {store} from "../store";
import axios from "axios";

export const getFeed = () => async dispatch => {
    const token = store.getState().userData.token

    const response = await axios.get(`http://localhost:8000/posts/feed/get`, {
        headers: {
            token,
            'content-type': 'application/json',
        }
    })

    const feed = response.data

    dispatch({
        type : "GET_FEED",
        payload : feed
    })
}

