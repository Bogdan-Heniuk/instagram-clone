import React from 'react';
import {AiFillHome} from "react-icons/ai";
import '../css/header.css'
import {FaUserCircle} from "react-icons/fa"

const Header = () => {
    return (
        <nav className='navigation'>
            <div className='container'>
                <div className="navigation__inner">
                    <div className="navigation__logo">
                        <img src="../images/1024px-Instagram_logo.svg.png" width='120' height='40' alt=""/>
                    </div>
                    <div className="navigation__search">
                        <input type="text" placeholder='&#xf002; Поиск'/>
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