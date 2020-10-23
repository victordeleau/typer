import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import styles from './App.module.css';

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import Menu from "./Main/Menu/Menu";
import Setup from "./Main/Setup/Setup";
import Play from "./Main/Play/Play";
import Board from "./Main/Board/Board";


class App extends Component {

  state = {
    party_played: 0,
    language: "english",
    textType: "random",
  }

  handleSetup(newLanguage, newTextType) {
    this.setState({
      language: newLanguage,
      textType: newTextType,
    })
  }

  getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {width, height};
  }

  render () {

    return (
      <div className={styles.App}>
        <Header/>

        <Switch>
          <Route exact path='/' component={Menu}/>
          <Route exact path='/setup' render={() => (
            <Setup
                language={this.state.language}
                textType={this.state.textType}
                handleSetup={this.handleSetup.bind(this)}
            />
          )}/>
          <Route exact path='/play' render={() => (
              <Play
                language={this.state.language}
                textType={this.state.textType}
              />
          )}/>
          <Route exact path='/board' component={Board}/>
        </Switch>

        <Footer top={this.getWindowDimensions().height}/>
      </div>
    );
  }
}

export default App;
