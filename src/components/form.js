import React, { Component } from 'react'
import {
NavLink
} from "react-router-dom"

class Form extends Component {

  render() {
    return (
      <div className="App">
        <NavLink exact to="/"><i className="material-icons">home</i></NavLink>


      </div>
    );
  }
}

export default Form
