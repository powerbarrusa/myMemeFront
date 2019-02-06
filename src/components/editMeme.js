import React, { Component } from 'react'
import {
NavLink
} from "react-router-dom"

class EditMeme extends Component {

  render() {
    return (
      <div className="App">
        <NavLink exact to="/"><i className="material-icons">home</i></NavLink>
        <div className="row center">
          <div className="col s12 m7">
            <div className="card">
              <div className="card-image align">
                <h1 className="topText">{this.props.bottom_text}</h1>
                <img className="image" src={this.props.image_url}/>
                <h1 className="bottomText">{this.props.top_text}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
            <div>
              <div className="input-field col s6">
                <input id="top-text" type="text" className="validate" onChange={this.props.ChangeTop}></input>
                <label htmlFor="top-text">Top Text</label>
              </div>
              <div className="input-field col s6">
                <input id="bottom-text" type="text" className="validate" onChange={this.props.ChangeBottom}></input>
                <label htmlFor="bottom-text">Bottom Text</label>
              </div>
              <div className="input-field col s6">
                <input id="image-url" type="text" className="validate" onChange={this.props.ChangeImg}></input>
                <label htmlFor="image-url">Image_URL</label>
              </div>
            </div>
            <NavLink exact to="/yourMemes">
              <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.props.Submit}>Submit
                <i className="material-icons right">send</i>
              </button>
            </NavLink>
          </div>
        </div>
    )
  }
}
export default EditMeme
