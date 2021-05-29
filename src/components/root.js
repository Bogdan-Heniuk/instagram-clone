import React from 'react';
import Header from "./header";
import Main from "./main";
import {useSelector} from "react-redux";

const Root = () => {
    return (
        <div>
            <Header/>
            <Main/>
        </div>
    );
};

export default Root;