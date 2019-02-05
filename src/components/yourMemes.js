import React, { Component } from 'react'
import {
NavLink
} from "react-router-dom"

class YourMemes extends Component {

  render() {
    console.log(this.props.memes)
    return (
      <div className="App">
        <NavLink exact to="/"><i className="material-icons">home</i></NavLink>
        {this.props.memes ? this.props.memes.map(meme => {
          return (
            <div class="row">
              <div class="col s12 m7">
                <div class="card">
                  <div class="card-image">
                    <h1 className="topText">Card Title</h1>
                    <img className="image" src={meme.image_url}></img>
                    <h1 className="bottomText">Card Title</h1>
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
