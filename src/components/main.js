import React, {useEffect} from 'react';
import Sidebar from "./sidebar";
import Feed from "./feed";
import '../css/main.css'
import {clearProfile} from "../redux/actions/profile";
import {useDispatch} from "react-redux";

const Main = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearProfile())
    }, [])

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