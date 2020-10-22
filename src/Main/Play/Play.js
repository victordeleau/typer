import React from 'react';
import styles from "./Play.module.css";

const Play = () => {
    return (
        <div className={styles.play}>
            <div className={styles.display}>
                Display
            </div>
            <div className={styles.input}>
                Input
            </div>
        </div>
    )
}; 

export default Play;