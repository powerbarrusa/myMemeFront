import React, { Component } from 'react';
import {
Route,
NavLink,
BrowserRouter,
Switch,
Redirect
} from "react-router-dom";

class Home extends Component {

  render() {
    return (
      <div className="row">
        <p className="col s8 m4 offset-s2 offset-m4">myMeme</p>
        <a className="z-depth-5 col s8 m4 offset-s2 offset-m4 waves-effect waves-light btn red"><NavLink exact to="/form">Make a Meme</NavLink></a>
        <a className="z-depth-5 col s8 m4 offset-s2 offset-m4 waves-effect waves-light btn blue"><NavLink exact to="/yourMemes">Your Memes</NavLink></a>
        <a className="z-depth-5 col s8 m4 offset-s2 offset-m4 waves-effect waves-light btn green"><NavLink exact to="/randomMeme">Random Meme</NavLink></a>
      </div>
    );
  }
}

export default Home;
