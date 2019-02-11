import React, { Component } from 'react'
import './App.css'
import {
Route,
BrowserRouter,
NavLink
} from "react-router-dom"

import CreateMeme from './components/createMeme.js'
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
      image_url: "",
      status: "",
      selectedId: ""
    }
    this.onSubmit = this.onSubmit.bind(this)
  }


  onChangeTopText = (e) => {
    this.setState({
      top_text: e.target.value.toUpperCase(),
    })
  }
  onChangeBottomText = (e) => {
    this.setState({
      bottom_text: e.target.value.toUpperCase(),
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
    fetch(`https://aqueous-peak-69240.herokuapp.com/${event.target.id}`, {
      method: 'DELETE'
    }).then(response => {response.json()})
    .then(data => data)

    let newMemes = [...this.state.memes]
    let correctMemes = newMemes.filter(meme => meme.id !== +event.target.id)
    this.setState({
      memes: correctMemes
    })
  }

  onSubmit = () => {
    var url = 'https://aqueous-peak-69240.herokuapp.com/createMeme'
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
    })
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
    let newMemes = [...this.state.memes]
    newMemes.push({...data, id: this.state.memes.length})
    this.setState({
      memes: newMemes
    })
  }

    statusAdd = (event) => {
      this.setState({
        status: "add",
        top_text: "",
        bottom_text: "",
        image_url: ""
      })
    }

    edit = (event) => {
      var url = `https://aqueous-peak-69240.herokuapp.com/${event.target.id}`
      var data = {
        top_text: this.state.top_text,
        bottom_text: this.state.bottom_text,
        image_url: this.state.image_url
      }
      console.log("about to fetch", data)
      fetch(url, {

        method: 'PUT', // or 'PUT'
        mode: 'cors',
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json'
        }
        }).then(res => res.json())
          .then(response => console.log('Success:', JSON.stringify(response)))
          .catch(error => console.error('Error:', error));
          let newMemes = [...this.state.memes].filter(memes => memes.id !== +event.target.id)
          newMemes.push({...data, id: this.state.memes.length})
          this.setState({
            memes: newMemes
          })
        }

    statusEdit = (event) => {
      let correctMeme = this.state.memes.filter(meme => meme.id === +event.target.id)
      this.setState({
        status: "edit",
        top_text: correctMeme[0].top_text,
        bottom_text: correctMeme[0].bottom_text,
        image_url: correctMeme[0].image_url,
        selectedId: +event.target.id
      })
    }

  render() {
    return (
      <BrowserRouter>
        <div className="App wallpaper">
          <nav>
            <div className="nav-wrapper">
              <NavLink exact to="/"><img className="left" src="https://fontmeme.com/permalink/190208/e53fe677035baef6db80bfaa9103baf3.png" alt="sabo-font" border="0"/></NavLink>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink exact to="/yourMemes" className="z-depth-5 col s8 m4 offset-s2 offset-m4 waves-effect waves-light btn blue">Your Memes</NavLink></li>
                <li><NavLink exact to="/randomMeme" className="z-depth-5 col s8 m4 offset-s2 offset-m4 waves-effect waves-light btn green">Random Meme</NavLink></li>
              </ul>
            </div>
          </nav>
          <div className="content">
              <Route path="/randomMeme" render={() => <RandomMeme
                  memes={this.state.memes}
                  randomMeme={this.randomMeme}
                  randomMemeImg={this.state.randomMemeImg}
                  randomTopText={this.state.randomTopText}
                  randomBottomText={this.state.randomBottomText}
                />}
              />
              <Route path="/" exact render={() =>
                <Home statusAdd={this.statusAdd}
                />
              }/>

              <Route path="/createMeme" render={() =>
                <CreateMeme
                  CardTop={this.state.top_text}
                  CardBottom={this.state.bottom_text}
                  CardImg={this.state.image_url}
                  ChangeTop={this.onChangeTopText}
                  ChangeBottom={this.onChangeBottomText}
                  ChangeImg={this.onChangeImgUrl}
                  Submit={this.onSubmit}
                  edit={this.edit}
                  status={this.state.status}
                  selectedMeme={this.state.selectedMeme}
                  id={this.state.selectedId}
                  />
                }/>
              <Route path="/yourMemes" render={() =>
                <YourMemes
                  statusEdit={this.statusEdit}
                  memes={this.state.memes}
                  delete={this.delete}
                  />
                }/>
          </div>
        </div>
      </BrowserRouter>
      )
    }
  }

export default App
