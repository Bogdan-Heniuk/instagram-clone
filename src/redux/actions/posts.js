import axios from "axios";
import {store} from "../store";

export const getPosts = () => async dispatch => {
    const token = store.getState().userData.token
    const posts = (await axios.get('http://localhost:8000/posts', {
        headers: {
            'content-type': 'application/json',
            token
        }
    })).data

    dispatch({
        type: "GET_POSTS",
        payload: posts
    })
}


export const createPost = (description, image) => async dispatch => {
    const token = store.getState().userData.token
    const formData = new FormData()
    formData.append('description', description)
    formData.append('image', image)

    await axios.post('http://localhost:8000/posts', formData, {
        headers: {
            'content-type': 'application/json',
            token
        }
    })

    dispatch(getPosts())
}