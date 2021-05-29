
import React from "react";
import {Route, Redirect} from 'react-router-dom'
import {useSelector} from "react-redux";

const PublicRoute = ({component: Component, ...rest}) => {
    const userData = useSelector(state => state.auth.user)

    return (
        <Route {...rest} render={props => (
            userData ? <Redirect to="/" /> : <Component {...props} />
        )} />
    );
};

export default PublicRoute