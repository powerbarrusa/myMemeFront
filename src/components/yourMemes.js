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
            <div class="row center">
              <div class="col s12 m7">
                <div class="card">
                  <div class="card-image align">
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
