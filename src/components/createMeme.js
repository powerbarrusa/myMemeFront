import React, { Component } from 'react'
import {
NavLink
} from "react-router-dom"

class CreateMeme extends Component {

  render() {
    let onClickFunction = this.props.status === "add" ? this.props.Submit : this.props.edit
    return (
      <div className="App">
        <div className="row center">
          <div className="col s12 m10 l6 offset-m1 offset-l3">
            <div className="card">
              <div className="card-image align">
                <h1 className="topText">{this.props.CardTop}</h1>
                <img className="" src={this.props.CardImg} alt=""/>
                <h1 className="bottomText">{this.props.CardBottom}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
            <div>
            <div className="input-field col s6">
              <input id="image-url" type="text" className="validate" onChange={this.props.ChangeImg}></input>
              <label htmlFor="image-url">Image_URL</label>
            </div>
              <div className="input-field col s6">
                <input id="top-text" type="text" className="validate" onChange={this.props.ChangeTop}></input>
                <label htmlFor="top-text">Top Text</label>
              </div>
              <div className="input-field col s6">
                <input id="bottom-text" type="text" className="validate" onChange={this.props.ChangeBottom}></input>
                <label htmlFor="bottom-text">Bottom Text</label>
              </div>
            </div>
            <NavLink exact to="/yourMemes">
              <button className="btn waves-effect waves-light" type="submit" name="action" id={this.props.id} onClick={onClickFunction}>Submit
                <i className="material-icons right">send</i>
              </button>
            </NavLink>
          </div>
        </div>
    );
  }
}
export default CreateMeme
