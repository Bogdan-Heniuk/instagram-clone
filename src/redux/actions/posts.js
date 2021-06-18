import axios from "axios";
import {store} from "../store";
import {getProfile} from "./profile";
import {getFeed} from "./feed";

const dislike = async post_id => {
    const token = store.getState().userData.token

    await axios.post("http://localhost:8000/posts/feed/dislike", {post_id}, {
        headers: {
            'content-type': 'application/json',
            token
        }
    })
}

const like = async post_id => {
    const token = store.getState().userData.token

    await axios.post("http://localhost:8000/posts/feed/like", {post_id}, {
        headers: {
            'content-type': 'application/json',
            token
        }
    })
}

const comment = async (post_id, text) => {
    const token = store.getState().userData.token

    await axios.post(`http://localhost:8000/posts/view/comment/${post_id}`, {text}, {
        headers: {
            'content-type': 'application/json',
            token
        }
    })
}

export const createPost = (description, image) => async dispatch => {
    const token = store.getState().userData.token
    const username = store.getState().userData.userData.username

    const formData = new FormData()
    formData.append('description', description)
    formData.append('image', image)

    await axios.post('http://localhost:8000/posts', formData, {
        headers: {
            'content-type': 'application/json',
            token
        }
    })
    dispatch(getProfile(username))
}

export const likePostInFeed = post_id => async dispatch => {
    await like(post_id)
    dispatch(getFeed())
}

export const likePostInProfile = post_id => async dispatch => {
    await like(post_id)
    dispatch(viewPost(post_id))
}

export const dislikePost = post_id => async dispatch => {
    await dislike(post_id)
    dispatch(getFeed())
}

export const dislikePostInProfile = post_id => async dispatch => {
    await dislike(post_id)
    dispatch(viewPost(post_id))
}

export const viewPost = post_id => async dispatch => {
    console.log(post_id);
    const token = store.getState().userData.token
    const response = await axios.get(`http://localhost:8000/posts/view/${post_id}`, {
        headers : {
            'content-type': 'application/json',
            token
        }})
    const postData = response.data

    dispatch({
        type : "GET_POSTDATA",
        payload : postData
    })
}

export const commentPostInProfile = (post_id, text) => async dispatch => {
    await comment(post_id, text)
    dispatch(viewPost(post_id))
}

export const clearPostData = () => {
    return {
        type : "CLEAR_POSTDATA"
    }
}

