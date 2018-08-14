import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    likes:0
  }

  handleLike = () => {
    this.setState({
      likes:++this.state.likes
    })
  }

  handleDislike = () => {
    this.setState({
      likes:--this.state.likes
    })
  }

  render() {
    return (
      <div className="App">
        <div>Total likes {this.state.likes}</div>
        <button onClick={this.handleLike}>Click to like</button>
        <button onClick={this.handleDislike}>Click to dislike</button>
      </div>
    );
  }
}

export default App;
