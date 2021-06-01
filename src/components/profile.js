import React from 'react';
import {useSelector} from "react-redux";

const Profile = () => {
    const profileData = useSelector(state => state.profile)

    return (
        <div>
            <h1>{profileData.username}</h1>
        </div>
    );
};

export default Profile;