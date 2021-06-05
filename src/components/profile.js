import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {FaUserCircle} from "react-icons/fa";
import Header from "./header";
import '../css/profile.css'
import {getProfile} from "../redux/actions/profile";
import Avatar from "./avatar";

const Profile = (props) => {
    const profileData = useSelector(state => state.profile)
    const dispatch = useDispatch()

    useEffect(() => {
        const {name} = props.match.params
        console.log(name);
        dispatch(getProfile(name))
    }, [])

    return (
        <div>
            <Header/>
            <div className='container'>
                <div className="head">
                    <div className="head__logo">
                        {profileData.avatar
                            ? <Avatar width='120px' height='120px' url={profileData.avatar}/>
                            : <FaUserCircle/>
                        }
                    </div>
                    <div className="head__userdata">
                        <div className="userdata__header">
                            <div className="header__username">
                                {profileData.username}
                            </div>
                            <div className="header__button">
                                <button>Редактировать профиль</button>
                            </div>
                        </div>
                        <div className="userdata__counts">
                            <div className="counts__posts">
                                5 публикаций
                            </div>
                            <div className="counts__subscribers">
                                14 подписчиков
                            </div>
                            <div className="counts__subscribes">
                                15 подписок
                            </div>
                        </div>
                        <div className="userdata__name">
                            {profileData.name}
                        </div>
                    </div>
                </div>
                <div className="nav"></div>
                <div className="posts"></div>
            </div>
        </div>
    );
};

export default Profile;