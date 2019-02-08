import React, { Component } from 'react'
import {
NavLink
} from "react-router-dom"

class YourMemes extends Component {

  render() {
    return (
      <div className="App">
        <NavLink exact to="/"><i className="material-icons iconLeft">home</i></NavLink>
        {this.props.memes ? this.props.memes.map((meme, idx) => {
          return (
            <div className="row center">
              <div className="col s12 m7">
                <div className="card">
                  <div className="card-image">
                    <div className="icons">
                      <NavLink exact to="/createMeme" onClick={this.props.statusEdit}><i className="material-icons iconBack" id={meme.id}>create</i></NavLink>
                      <i className="material-icons iconBack" id={meme.id} onClick={this.props.delete}>delete</i>
                    </div>
                    <div className="align">
                      <h1 className="topText">{meme.top_text}</h1>
                      <img className="image" src={meme.image_url}></img>
                      <h1 className="bottomText">{meme.bottom_text}</h1>
                    </div>
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
