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
              <div className="col s12 m10 l10 offset-m1 offset-l1">
                <div className="card">
                  <div className="card-image">
                    <div className="align">
                      <div className="icons">
                        <NavLink exact to="/createMeme" onClick={this.props.statusEdit}><i className="material-icons iconBack" id={meme.id}>create</i></NavLink>
                        <i className="material-icons iconBack" id={meme.id} onClick={this.props.delete}>delete</i>
                      </div>
                      <h1 className="topText flow-text text">{meme.top_text}</h1>
                      <img className="image responsive-img" src={meme.image_url}></img>
                      <h1 className="bottomText flow-text text">{meme.bottom_text}</h1>
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
