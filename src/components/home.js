import React, { Component } from 'react'
import {
NavLink
} from "react-router-dom"

class Home extends Component {

  render() {
    return (
        <div className="row wallpaper">
          <img src="https://fontmeme.com/permalink/190208/e53fe677035baef6db80bfaa9103baf3.png" alt="sabo-font" border="0" />
          <NavLink exact to="/createMeme" className="z-depth-5 col s8 m4 offset-s2 offset-m4 waves-effect waves-light btn red">Make a Meme</NavLink>
          <NavLink exact to="/yourMemes" className="z-depth-5 col s8 m4 offset-s2 offset-m4 waves-effect waves-light btn blue">Your Memes</NavLink>
          <NavLink exact to="/randomMeme" className="z-depth-5 col s8 m4 offset-s2 offset-m4 waves-effect waves-light btn green">Random Meme</NavLink>
        </div>
        )
      }
    }

export default Home
