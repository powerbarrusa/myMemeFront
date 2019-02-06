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
      memes: "",
      hasMeme: false,
      randomMeme: "",
      randomTopText: "",
      randomBottomText: ""
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

  getRandom (max) {
    const min = 0
    return Math.floor(Math.random() * (max - min)) + min
  }

  randomMeme = () => {
    console.log(this.state.memes)
    const randomIndex = this.getRandom(this.state.memes.length)
      const randomMeme = this.state.memes[randomIndex]
      this.setState({
        hasMeme: true,
        randomMeme: randomMeme.image,
        // randomTopText: randomTopText.top_text,
        // randomBottomText: randomBottomText.bottom_text
      })
    }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="content">
            <Switch>
              <Route path="/" exact render={() => <Home exampleProp="hello" />}/>
              <Route path="/form" render={() => <Form/>}/>
              <Route path="/yourMemes" render={() => <YourMemes/>}/>
              <Route path="/randomMeme" render={() => <RandomMeme
                  memes={this.state.memes}
                  randomMeme={this.randomMeme}
                />}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
