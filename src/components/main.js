import React from 'react';
import Sidebar from "./sidebar";
import Feed from "./feed";
import '../css/main.css'

const Main = () => {
    return (
        <div className='container'>
            <div className="main">
                <Feed />
                <Sidebar/>
            </div>
        </div>
    );
};

export default Main;