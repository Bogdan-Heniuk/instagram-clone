import React from 'react';
import '../css/avatar.css'
import {useSelector} from "react-redux";

const Avatar = ({width, height}) => {
    const userData = useSelector(state => state.userData.userData)

    return (
        <div className='avatar' style={{
            backgroundImage: `url("http://localhost:8000/uploads/${userData.avatar}")`,
            width,
            height
        }}/>
    );
};

export default Avatar;