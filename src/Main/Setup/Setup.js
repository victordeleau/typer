import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Setup.module.css";

const Setup = (props) => {

    let textDef = "";
    if (props.textType === "random") {
        textDef = <p>Select random words from the dictionnary.</p>
    } else { // book
        textDef = <p>Select a paragraph from a book.</p>
    }

    return (

        <div className={styles.setup}>
            <h2><a>Select your preferences</a></h2>

            <br/>

            <form>
                <label>
                    <h3>Language &nbsp; &nbsp; &nbsp;
                        <select 
                            defaultValue={props.language}
                            onChange={(e) => props.handleSetup(
                                e.target.value, props.textType)}>
                                    <option value="english">English</option>
                                    <option value="french">French</option>
                        </select>
                    </h3>
                </label>

                ----------------------------------------------------------------

                <label>
                    <h3>Text &nbsp; &nbsp; &nbsp;
                        <select
                            defaultValue={props.textType}
                            onChange={(e) => props.handleSetup(
                                props.language, e.target.value)}>
                                    <option value="random">Random Words</option>
                                    <option value="book">Book Paragraph</option>
                        </select>
                    </h3>
                    {textDef}
                </label>

                <br/><br/><br/>

                <Link to="/play">
                    <button className={styles.button}>
                        Play
                    </button>
                </Link>
            </form>
        </div>
        
    )
}; 

export default Setup;