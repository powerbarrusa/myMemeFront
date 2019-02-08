import React, { Component } from 'react'
import './App.css'
import {
Route,
BrowserRouter,
Switch
} from "react-router-dom"

import CreateMeme from './components/createMeme.js'
import EditMeme from './components/editMeme.js'
import YourMemes from './components/yourMemes.js'
import RandomMeme from './components/randomMeme.js'
import Home from './components/home.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      memes: "",
      randomMemeImg: "",
      randomTopText: "",
      randomBottomText: "",
      top_text: "",
      bottom_text: "",
      image_url: ""
    }
    this.onSubmit = this.onSubmit.bind(this)
  }


  onChangeTopText = (e) => {
    this.setState({
      top_text: e.target.value,
    })
  }
  onChangeBottomText = (e) => {
    this.setState({
      bottom_text: e.target.value,
    })
  }
  onChangeImgUrl = (e) => {
    this.setState({
      image_url: e.target.value,
    })
  }

  async componentDidMount(){
    try {
      const api = await fetch('https://aqueous-peak-69240.herokuapp.com')
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
    const randomIndex = this.getRandom(this.state.memes.length)
      const randomMeme = this.state.memes[randomIndex]
      this.setState({
        hasMeme: true,
        randomMemeImg: randomMeme.image_url,
        randomTopText: randomMeme.top_text,
        randomBottomText: randomMeme.bottom_text
      })
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

  onSubmit = () => {
    var url = 'http://localhost:3001/createMeme'
    var data = {
      top_text: this.state.top_text,
      bottom_text: this.state.bottom_text,
      image_url: this.state.image_url
    }
    console.log("about to fetch", data)
    fetch(url, {

      method: 'POST', // or 'PUT'
      mode: 'cors',
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
      }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
        let newMemes = [...this.state.memes]
        newMemes.push(data)
        this.setState({
          memes: newMemes
        })
    }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="content">
            <Switch>
              <Route path="/" exact render={() => <Home exampleProp="hello" />}/>
              <Route path="/randomMeme" render={() => <RandomMeme
                  memes={this.state.memes}
                  randomMeme={this.randomMeme}
                  randomMemeImg={this.state.randomMemeImg}
                  randomTopText={this.state.randomTopText}
                  randomBottomText={this.state.randomBottomText}
                />}
              />
              <Route path="/" exact render={() => <Home/>}/>

              <Route path="/createMeme" render={() =>
                <CreateMeme
                  CardTop={this.state.top_text}
                  CardBottom={this.state.bottom_text}
                  CardImg={this.state.image_url}
                  ChangeTop={this.onChangeTopText}
                  ChangeBottom={this.onChangeBottomText}
                  ChangeImg={this.onChangeImgUrl}
                  Submit={this.onSubmit}
                  />
                }/>
                <Route path="/editMeme" render={() =>
                  <EditMeme
                    ChangeTop ={this.onChangeTopText}
                    ChangeBottom ={this.onChangeBottomText}
                    ChangeImg ={this.onChangeImgUrl}
                    />
                  }/>
              <Route path="/yourMemes" render={() => <YourMemes memes={this.state.memes} delete={this.delete}/>}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
