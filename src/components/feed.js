import React from 'react';
import Post from "./post";
import '../css/feed.css'
const Feed = () => {
    return (
        <div className='feed'>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
};

export default Feed;