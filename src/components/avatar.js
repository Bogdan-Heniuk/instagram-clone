import React from 'react';
import '../css/avatar.css'

const Avatar = ({width, height, url}) => {

    return (
        <div className='avatar' style={{
            backgroundImage: `url("http://localhost:8000/uploads/${url}")`,
            width,
            height
        }}/>
    );
};

export default Avatar;