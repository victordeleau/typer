import React, {Component} from 'react';
import styles from "./Play.module.css";

import PlayDisplay from "./PlayDisplay/PlayDisplay.js";
import PlayInput from "./PlayInput/PlayInput";


class Play extends Component {

    state = {
        hasStarted: false,
        dictionnaryWords: [],
        wordsToDisplay: [],
        lettersToDisplay: [],
        lettersProvided: [],
        lettersValidation: [],
        validationIndex: 0,
        wordNumber: 64,
    }

    generateText() {

        const dictionnarySize = this.state.dictionnaryWords.length;

        let wordsToDisplay = [];
        let lettersToDisplay = [];
        let idx, word;

        for (let i=0; i<this.state.wordNumber; i++) {

            idx = Math.floor(Math.random() * dictionnarySize); 
            word = this.state.dictionnaryWords[idx];

            wordsToDisplay.push(word)

            for (let j=0; j<word.length; j++) {
                lettersToDisplay.push(word[j])
            }
            
            lettersToDisplay.push(" ") 
        }

        this.setState({
            wordsToDisplay: wordsToDisplay,
            lettersToDisplay: lettersToDisplay,
        })

    }

    fetchDictionnary() {

        fetch("./dictionnary/" + this.props.language + ".txt")
        .then( r => r.text())
        .then( t => {
            this.setState({
                dictionnaryWords: t.split("\n"),
            }, () => this.generateText())
        })
        .catch( (e) => console.log(e) )
    }

    componentDidMount() {
        this.fetchDictionnary();
    }

    render() {

        return (
            <div className={styles.play}>
                <PlayDisplay letters={this.state.lettersToDisplay}/>
                <PlayInput/>
            </div>
        )
    }
}

export default Play;