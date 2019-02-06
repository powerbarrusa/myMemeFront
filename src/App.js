import React, { Component } from 'react'
import './App.css'
import {
Route,
BrowserRouter,
Switch
} from "react-router-dom"
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

  delete = (event) => {
    fetch(`http://localhost:3001/${event.target.id}`, {
      method: 'DELETE'
    }).then(response => {response.json()})
    .then(data => data)

    let memes = [...this.state.memes]
    memes.splice(event.target.id - 1, 1)

    this.setState({
      memes: memes
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="content">
            <Switch>
              <Route path="/" exact render={() => <Home/>}/>
              <Route path="/form" render={() => <Form/>}/>




              <Route path="/yourMemes" render={() => <YourMemes memes={this.state.memes} delete={this.delete}/>}/>
              <Route path="/randomMeme" render={() => <RandomMeme state={this.state.memes}/>}/>

            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
