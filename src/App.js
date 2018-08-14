import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div>Total likes {this.props.likes}</div>
        <button onClick={this.props.handleLike}>Click to like</button>
        <button onClick={this.props.handleDislike}>Click to dislike</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    likes: state.likes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLike: () => dispatch({type:'like'}),
    handleDislike: () => dispatch({type:'dislike'}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
