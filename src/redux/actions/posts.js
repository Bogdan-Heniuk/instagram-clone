import axios from "axios";
import {store} from "../store";
import {getProfile} from "./profile";

export const getPosts = (profile_id) => async dispatch => {
    const token = store.getState().userData.token

    const posts = (await axios.get(`http://localhost:8000/posts/${profile_id}`, {
        headers: {
            token,
            'content-type': 'application/json',
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

    const response = await axios.post('http://localhost:8000/posts', formData, {
        headers: {
            'content-type': 'application/json',
            token
        }
    })

    const post = response.data

    dispatch(getPosts(post.user_id))
    dispatch(getProfile(post.user_id))
}


