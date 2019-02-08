import React, { Component } from 'react'
import {
NavLink
} from "react-router-dom"

class Home extends Component {

  render() {
    return (
      <div className="row separate">
        <div class="row">
          <div class="col s12 m10 l6 offset-m1 offset-l3">
            <div class="card-panel teal">
              <span class="white-text">
                <h4>Welcome to myMeme! A place to keep your memes, if you will. A one-stop-shop, simple website allowing you to freely create and edit your own memes, ad-free, and pop-up free. Did we mention free?</h4>
              </span>
            </div>
          </div>
        </div>
        <NavLink exact to="/createMeme" className="z-depth-5 col s8 m4 offset-s2 offset-m4 waves-effect waves-light btn red separate" onClick={this.props.statusAdd}>Make a Meme</NavLink>
        <div className="space">
        </div>
      </div>
    );
  }
}

export default Home
