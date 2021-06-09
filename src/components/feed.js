import React, {useEffect} from 'react';
import Post from "./post";
import '../css/feed.css'
import {useDispatch, useSelector} from "react-redux";
import {getFeed} from "../redux/actions/feed";

const Feed = () => {
    const feed = useSelector(state => state.feed)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFeed())
    })

    return (
        <div className='feed'>
            {feed.map(post => <Post postData = {post}/>)}
        </div>
    );
};

export default Feed;