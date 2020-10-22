import React from 'react';
import {Link} from "react-router-dom";

import styles from "./Header.module.css";

const header = (props) => {
    return (
        <Link to="/" className={styles.header}>
            <div className={styles.header_logo}>
                <img src={process.env.PUBLIC_URL+"/logo_white_on_none_512.png"} alt="Logo" width="80"/>
            </div>
            <h1> y p e r</h1>
        </Link>
    )
}; 

export default header;