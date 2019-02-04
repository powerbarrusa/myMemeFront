import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      memes: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001')
    .then(data => data.json())
    .then(memes => {
      this.setState({
        memes: memes
      })
    })
  }

  render() {
    console.log(this.state.memes)
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
