import React, { Component } from 'react'
import {
NavLink
} from "react-router-dom"

class YourMemes extends Component {

  render() {
    return (
      <div className="App">
        {this.props.memes ? this.props.memes.map((meme, idx) => {
          return (
            <div className="row center" key={idx}>
              <div className="col s12 m10 l6 offset-m1 offset-l3">
                <div className="card">
                  <div className="card-image">
                    <div className="align">
                      <div className="icons">
                        <NavLink exact to="/createMeme" onClick={this.props.statusEdit}><i className="material-icons iconBack" id={meme.id}>create</i></NavLink>
                        <i className="material-icons iconBack" id={meme.id} onClick={this.props.delete}>delete</i>
                      </div>
                      <h1 className="topText flow-text text">{meme.top_text}</h1>
                      <img className="image responsive-img" src={meme.image_url} alt=""></img>
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
