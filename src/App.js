import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      memes: ""
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
        {this.state.memes ? <img src={this.state.memes[0].image_url}></img> : ""}
        <a href="form.js" class="btn-floating btn-large waves-effect waves-light red" onSubmit="return false"><i class="material-icons" >add</i></a>

      </div>
    );
  }
}

export default App;
