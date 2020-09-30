import React from 'react';
import "./Menu.css";

const menu = (props) => {
    return (
        <div className="menu">
            <div className="definition">
            <strong>Typer</strong> is a typing game.
            <br/><br/>
            Type the text as fast and accurately as possible, <br/>get ranked and win the bet ! 
            </div>
            <div className="play_button">
                <button onClick={() => {props.switch(1)}}> Play </button>
            </div>
            <div className="board_button">
                <button onClick={() => {props.switch(2)}}> Board </button>
            </div>
        </div>
    )
}; 

export default menu;