import React, {Component} from 'react';
import './App.css';

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import Menu from "./Main/Menu/Menu";
import TyperGame from "./Main/TyperGame/TyperGame";
import Board from "./Main/Board/Board";

class App extends Component {

  state = {
    display: 0,
    party_played: 0
  }

  switchDisplay = (display) => {
    this.setState({display: display});
  }

  getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {width, height};
  }

  render () {

    let content = null;    
    if ( this.state.display === 1 ) {
      content = <TyperGame/>
    } else if ( this.state.display === 2 ) {
      content = <Board/>;
    } else { // should be === 0
      content = <Menu switch={this.switchDisplay.bind(this)}/>;
    }

    return (
      <div className="App">
        <Header switch={this.switchDisplay.bind(this)}/>
        {content}
        <Footer top={this.getWindowDimensions().height}/>
      </div>
    );
  }
}

export default App;
