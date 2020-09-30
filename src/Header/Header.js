import React from 'react';

import "./Header.css";
import logo from "./logo_white_on_none.png";

const header = (props) => {
    return (
        <div className="header" onClick={() => {props.switch(0)}}>
            <div className="header_logo">
                <img src={logo} alt="Logo" width="80"/>
            </div>
            <h1><a> y p e r</a></h1>
        </div>
    )
}; 

export default header;