import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    likes:0
  }

  render() {
    return (
      <div className="App">
        <div>Total likes {this.state.likes}</div>
        <button>Click to like</button>
        <button>Click to dislike</button>
      </div>
    );
  }
}

export default App;
