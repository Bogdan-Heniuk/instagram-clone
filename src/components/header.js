import React, {useRef, useState} from 'react';
import {AiFillHome} from "react-icons/ai";
import '../css/header.css'
import {FaUserCircle} from "react-icons/fa"
import {useDispatch, useSelector} from "react-redux";
import {clearSearchedUsers, searchForUsers} from "../redux/actions/users";
import {useHistory} from "react-router-dom";
import '../css/sidebar.css'
import Avatar from "./avatar";

const Header = () => {
    const searchResultsRef = useRef()
    const inputRef = useRef()
    const [focus, setFocus] = useState(false)
    const [value, setValue] = useState('')
    const searchedUsers = useSelector(state => state.searchedUsers)
    const dispatch = useDispatch()
    const history = useHistory()


    const focusHandler = () => {
        setFocus(true)
    }

    const onBackdropClick = () => {
        setFocus(false)
        dispatch(clearSearchedUsers())
    }


    const inputHandler = (e) => {
        setValue(e.target.value)

        if (!e.target.value) return dispatch(clearSearchedUsers())

        dispatch(searchForUsers(e.target.value))
    }

    const pushProfile = (username) => {
        console.log(username);
        history.push(`/profile/${username}`)
    }


    return (
        <nav className='navigation'>
            <div className='container'>
                <div className="navigation__inner">
                    <div className="navigation__logo">
                        <img src="../images/1024px-Instagram_logo.svg.png" width='120' height='40' alt=""/>
                    </div>
                    <div className="navigation__search">
                        <input
                               value={value}
                               onFocus={focusHandler}
                               onChange={(e) => inputHandler(e)} className='fas search' type="search"
                               placeholder='&#xf002; Поиск'/>
                    </div>
                    {focus && <div className="backdrop" onClick={() => onBackdropClick()} />}
                    {focus && <div className="search__results">
                        <div className="search__results__inner">
                            {searchedUsers.map(searchedUser => {
                                return (
                                    <div className="result" onClick={() => pushProfile(searchedUser.username)}
                                         key={searchedUser.id}>
                                        <div className="result__logo">
                                            <FaUserCircle/>
                                        </div>
                                        <div className="result__username">
                                            {searchedUser.username}
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>}
                    <div className="navigation__icons">
                        <div className="home">
                            <AiFillHome/>
                        </div>
                        <Avatar width='25px' height='25px'/>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Header;