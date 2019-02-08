import React, { Component } from 'react'
import {
NavLink
} from "react-router-dom"

class RandomMeme extends Component {

  render() {
    return (
      <div className="App">
        <NavLink exact to="/"><i className="material-icons iconLeft">home</i></NavLink>
        <p><button onClick={this.props.randomMeme} type="button" className="waves-effect waves-light btn red">Hit me with another!</button></p>
        <div className="row">
          <div className="col s12">
            <div className="card">
              <div className="card-image align">
                <h1 className="topText">{this.props.randomTopText}</h1>
                <img className="random-image" src={this.props.randomMemeImg} alt="" />
                <h1 className="bottomText">{this.props.randomBottomText}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RandomMeme
