import React from 'react';
import {Link} from "react-router-dom"; 
import styles from "./Menu.module.css";

const Menu = (props) => {

    return (
        <div className={styles.menu}>
            <div className={styles.definition}>
            <strong>Typer</strong> is a typing game.
            <br/><br/>
            Type the text as fast and accurately<br/>as possible and get ranked ! 
            </div>

            <br/><br/><br/>

            <Link to="/setup" className={styles.play_button}>
                <button className={styles.button}>
                    Play 
                </button>
            </Link>

            <Link to="/board" className={styles.board_button}>
                <button className={styles.button}>
                    Board 
                </button>
            </Link>
        </div>
    )
}; 

export default Menu;