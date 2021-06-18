import React, {useEffect} from 'react';
import Post from "./post";
import '../css/feed.css'
import {useDispatch, useSelector} from "react-redux";
import {clearFeed, getFeed} from "../redux/actions/feed";

const Feed = () => {
    const feed = useSelector(state => state.feed)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFeed())

        return () => dispatch(clearFeed())
    }, [])

    return (
        <div className='feed'>
            {feed.map(post => <Post key={post.id} postData={post}/>)}
        </div>
    );
};

export default Feed;