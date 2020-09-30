import React from 'react';

import "./Header.css";

const header = (props) => {
    return (
        <div className="header" onClick={() => {props.switch(0)}}>
            <div className="header_logo">
                <img src={process.env.PUBLIC_URL+"/logo_white_on_none_512.png"} alt="Logo" width="80"/>
            </div>
            <h1><a> y p e r</a></h1>
        </div>
    )
}; 

export default header;