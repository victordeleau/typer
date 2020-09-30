import React from 'react';

import "./Footer.css";

const footer = (props) => {

    const top = {top: props.top-50} // put footer to bottom of the window

    return (
        <div className="footer" style={top}>
            <div className="footer_text">
                Made by <a href="https://victordeleau.com" target="_blank" rel="noopener noreferrer">Victor Deleau</a> / @2020
            </div>
        </div>
    )
}; 

export default footer;