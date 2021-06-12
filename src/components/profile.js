import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {FaUserCircle} from "react-icons/fa";
import {MdApps} from "react-icons/md";
import Header from "./header";
import '../css/profile.css'
import Avatar from "./avatar";
import {clearProfile, followProfile, getProfile, unfollowProfile} from "../redux/actions/profile";
import Modal from "./modal";
import {BsBookmark} from "react-icons/bs";

const Profile = (props) => {
    const profileData = useSelector(state => state.profile)
    const posts = useSelector(state => state.profile.posts)
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProfile(props.match.params.username))

        return () => {
            dispatch(clearProfile())
        }
    }, [props.match.params.username])

    const displayButton = () => {
        if (!profileData.hasOwnProperty('subscribed'))
            return (
                <div className='buttons'>
                    <button className='button'>Редактировать профиль</button>
                    <button className='button' onClick={() => setModal(true)}>Создать публикацию</button>
                </div>
            )

        if (profileData.subscribed)
            return <button onClick={() => dispatch(unfollowProfile(profileData.id, profileData.username))}>Подписки</button>

        return <button onClick={() => dispatch(followProfile(profileData.id, profileData.username))}>Подписаться</button>
    }


    return (
        <div>
            {modal && <Modal setModal={setModal}/>}
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
                                {displayButton()}
                            </div>
                        </div>
                        <div className="userdata__counts">
                            <div className="counts__posts">
                                <strong>{profileData.postsNumber}</strong> публикаций
                            </div>
                            <div className="counts__subscribers">
                                <strong>{profileData.followers}</strong> подписчиков
                            </div>
                            <div className="counts__subscribes">
                                <strong>{profileData.followings}</strong> подписок
                            </div>
                        </div>
                        <div className="userdata__name">
                            {profileData.name}
                        </div>
                    </div>
                </div>
                <div className="nav">
                    <div className="nav__item">
                        <MdApps/>
                        Публикации
                    </div>
                    <div className="nav__item">
                        <BsBookmark/>
                        Сохраненное
                    </div>
                </div>
                <div className="profile_posts">
                    {posts?.map(post => {
                        return (
                            <div className="profile_post" key={post.id} style={{
                                backgroundImage: `url("http://localhost:8000/uploads/${post.image}")`,
                            }}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Profile;