import React, { Component } from 'react'
import {
NavLink
} from "react-router-dom"

class RandomMeme extends Component {

  getRandom (max) {
    const min = 0
    return Math.floor(Math.random() * (max - min)) + min
  }



  render() {
    console.log(this.props.state)
    return (
      <div className="App">
        <NavLink exact to="/"><i className="material-icons">home</i></NavLink>
        <p><button type="button" className="waves-effect waves-light btn red">Hit me with another!</button></p>
        <div className="row">
          <div className="col s12">
            <div className="card">
              <div className="card-image">
                <img src={this.props.state ? this.props.state[1].image : "error"} alt="" />
                <span className="card-title">Card Title</span>
              </div>
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomMeme
