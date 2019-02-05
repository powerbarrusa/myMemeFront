import React, { Component } from 'react';
import {
Route,
NavLink,
BrowserRouter,
Switch,
Redirect,
Link
} from "react-router-dom";

class RandomMeme extends Component {

  render() {
    return (
      <div className="App">
        <NavLink exact to="/"><i class="material-icons">home</i></NavLink>

      </div>
    );
  }
}

export default RandomMeme;
