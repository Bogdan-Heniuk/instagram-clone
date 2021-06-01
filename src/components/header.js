import React, {useRef, useState} from 'react';
import {AiFillHome} from "react-icons/ai";
import '../css/header.css'
import {FaUserCircle} from "react-icons/fa"
import {useDispatch, useSelector} from "react-redux";
import {clearSearchedUsers, searchForUsers} from "../redux/actions/users";
import useInputValue from "../hooks/useInputValue";
import {useHistory} from "react-router-dom";
import {getProfile} from "../redux/actions/profile";

const Header = () => {
    const searchResultsRef = useRef()
    const inputRef = useRef()
    const [value, setValue] = useState('')
    const searchedUsers = useSelector(state => state.searchedUsers)
    const dispatch = useDispatch()
    const history = useHistory()



    const focusHandler = () => {
        searchResultsRef.current.style.display = 'block';
    }


    const inputHandler = (e) => {
        if(!value) dispatch(clearSearchedUsers())
        dispatch(searchForUsers(e.target.value))
        setValue(e.target.value)
    }

    const pushProfile = (id) => {
        dispatch(getProfile(id))
        history.push(`/profile/${id}`)
    }

    const blurHandler = () => {
        searchResultsRef.current.style.display = 'none';
    }

    return (
        <nav className='navigation'>
            <div className='container'>
                <div className="navigation__inner">
                    <div className="navigation__logo">
                        <img src="../images/1024px-Instagram_logo.svg.png" width='120' height='40' alt=""/>
                    </div>
                    <div className="navigation__search">
                        {/*<input {...searchInput.bind} onInput={inputHandler} onFocus={focusHandler} onBlur={blurHandler} className='fas search' type="search" placeholder='&#xf002; Поиск'/>*/}
                        <input ref={inputRef} onFocus={focusHandler} onChange={(e) => inputHandler(e)} className='fas search' type="search" placeholder='&#xf002; Поиск'/>
                    </div>
                    <div className="search__results" ref={searchResultsRef} onBlur={blurHandler}>
                        <div className="search__results__inner">
                            {searchedUsers.map(searchedUser => {
                                return (
                                        <div className="result" onClick={() => pushProfile(searchedUser.id)} key={searchedUser.id}>
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
                    </div>
                    <div className="navigation__icons">
                        <div className="home">
                            <AiFillHome/>
                        </div>
                        <div className="user">
                            <FaUserCircle/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Header;