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
          <Route exact path='/setup' component={Setup}/>
          <Route exact path='/play' component={Play}/>
          <Route exact path='/board' component={Board}/>
        </Switch>

        <Footer top={this.getWindowDimensions().height}/>
      </div>
    );
  }
}

export default App;
