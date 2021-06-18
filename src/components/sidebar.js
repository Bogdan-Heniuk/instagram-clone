import React, {useEffect} from 'react';
import '../css/sidebar.css'
import {useDispatch, useSelector} from "react-redux";
import {clearRecommends, getRecommends, subscribeOnRecommends} from "../redux/actions/users";
import Avatar from "./avatar";
import {FaUserCircle} from "react-icons/fa";
import {useHistory} from "react-router-dom";

const Sidebar = () => {
    const userData = useSelector(state => state.userData.userData)
    const users = useSelector(state => state.usersRecommends)
    const dispatch = useDispatch()
    const history = useHistory()

    const pushProfile = (username) => {
        history.push(`/profile/${username}`)
    }
    useEffect(() => {
        dispatch(getRecommends())
        return () => dispatch(clearRecommends())
    }, [])


    return (
        <div className='sidebar'>
                <div className="sidebar__account">
                    <div className="account__user" onClick={() => pushProfile(userData.username)}>
                        <div className="account__avatar">
                        {userData.avatar
                            ? <Avatar width='60px' height='60px' url={userData.avatar}/>
                            : <FaUserCircle />
                        }
                        </div>
                        <div className="account__text">
                            <div className="account__username">{userData.username}</div>
                            <small className="account__small">
                                {userData.name}
                            </small>
                        </div>
                    </div>
                </div>
                <div className="sidebar__head">
                    <div className="head__title">
                        Рекомендации для вас
                    </div>
                    <div className="head__all">
                        Все
                    </div>
                </div>
                <div className="sidebar__recommends">
                    <div className="recommends__inner">
                        {users.map(user => {
                            return (
                                <div className="recommended" key={user.id}>
                                    <div className="recommended__user" onClick={() => pushProfile(user.username)} >
                                        <div className="recommended__avatar">
                                            {user.avatar
                                                ? <Avatar width='25px' height='25px' url={user.avatar}/>
                                                : <FaUserCircle/>
                                            }
                                        </div>
                                        <div className="recommended__text">
                                            <div className="recommended__username">{user.username}</div>
                                            <small className="recommended__small">
                                                Рекомендации для вас
                                            </small>
                                        </div>
                                    </div>
                                    <div className="recommended__subscribe">
                                        <a onClick={() => dispatch(subscribeOnRecommends(user.id))}>подписаться</a>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
    );
};

export default Sidebar;