import React, {useState} from 'react';
import styles from "./PlayDisplay.module.css";

const PlayDisplay = (props) => {

    return (
        <div className={styles.play_display}>
            {props.letters}
        </div>
    )
}; 

export default PlayDisplay;