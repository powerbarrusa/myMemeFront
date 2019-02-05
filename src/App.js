import React, { Component } from 'react'
import './App.css'
import {
Route,
NavLink,
BrowserRouter,
Switch,
Redirect,
Link
} from "react-router-dom";
import Form from './components/form.js'
import YourMemes from './components/yourMemes.js'
import RandomMeme from './components/randomMeme.js'
import Home from './components/home.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      memes: ""
    }
  }

  async componentDidMount(){
    try {
      const api = await fetch('http://localhost:3001')
      const memes = await api.json()
      this.setState({
        memes: memes
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="content">
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/form" component={Form} />
              <Route path="/yourMemes" component={YourMemes} />
              <Route path="/randomMeme" component={RandomMeme} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
