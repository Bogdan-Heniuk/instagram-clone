import React, {useEffect} from 'react';
import '../css/sidebar.css'
import {FaUserCircle} from "react-icons/fa"
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../redux/actions/users";

const Sidebar = () => {
    const userData = useSelector(state => state.userData.userData)
    const users = useSelector(state => state.users)
    const token = useSelector(state => state.userData.token)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers(token))
    }, [])

    return (
        <div className='sidebar'>
            <div className="sidebar__account">
                <div className="account__user">
                    <div className="account__avatar">
                        <FaUserCircle/>
                    </div>
                    <div className="account__text">
                        <div className="account__username">{userData.username}</div>
                        <small className="account__small">
                            airpods pro
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
                                <div className="recommended">
                                    <div className="recommended__user">
                                        <div className="recommended__avatar">
                                            <FaUserCircle/>
                                        </div>
                                        <div className="recommended__text">
                                            <div className="recommended__username">{user.username}</div>
                                            <small className="recommended__small">
                                                Рекомендации для вас
                                            </small>
                                        </div>
                                    </div>
                                    <div className="recommended__subscribe">
                                        <a href="">подписаться</a>
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