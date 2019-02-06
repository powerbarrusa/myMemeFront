import React, { Component } from 'react'
import {
NavLink
} from "react-router-dom"

class YourMemes extends Component {

  render() {
    return (
      <div className="App">
        <NavLink exact to="/"><i className="material-icons iconLeft">home</i></NavLink>
        {this.props.memes ? this.props.memes.map(meme => {
          return (
            <div className="row center">
              <div className="col s12 m7">
                <div className="card">
                  <div className="card-image align">
                    <div className="icons">
                      <i className="material-icons iconBack">create</i>
                      <i className="material-icons iconBack" id={meme.id} onClick={this.props.delete}>delete</i>
                    </div>
                    <h1 className="topText">{meme.bottom_text}</h1>
                    <img className="image" src={meme.image_url}></img>
                    <h1 className="bottomText">{meme.top_text}</h1>
                  </div>
                </div>
              </div>
            </div>
        )
        }) :
        ""
      }
      </div>
    );
  }
}

export default YourMemes
