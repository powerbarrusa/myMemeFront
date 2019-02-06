import React, { Component } from 'react'
import {
NavLink
} from "react-router-dom"

class RandomMeme extends Component {

  render() {
    console.log(this.props.randomMeme)
    return (
      <div className="App">
        <NavLink exact to="/"><i className="material-icons">home</i></NavLink>
        <p><button onClick={this.props.randomMeme} type="button" className="waves-effect waves-light btn red">Hit me with another!</button></p>
        {this.props.hasMeme ? 
        <div className="row">
          <div className="col s12">
            <div className="card">
              <div className="card-image override">
                <p className="top-text">Top Text</p>
                <img className="random-image" src={this.props.randomMeme ? this.props.randomMeme.image: ""} alt="" />
                <p className="bottom-text">Bottom</p>
              </div>
            </div>
          </div>
        </div> : ""}
      </div>
    )
  }
}

export default RandomMeme
