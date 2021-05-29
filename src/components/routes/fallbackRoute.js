import React from "react";
import {Redirect} from 'react-router-dom'
import {useSelector} from "react-redux";

const FallbackRoute = () => {
    const userData = useSelector(state => state.auth.user)
    if(userData) {
        return <Redirect to='/'/>
    }

    if(userData.hasOwnProperty('id')) return <Redirect to='/'/>
    return <Redirect to ='/login'/>
}

export default FallbackRoute