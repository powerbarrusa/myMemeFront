import React, { Component } from 'react'
import {
NavLink
} from "react-router-dom"

class CreateMeme extends Component {

  constructor() {
    super()
    this.state = {
      top_text: "",
      bottom_text: "",
      image_url: "",

    }
    this.onChangeTopText = this.onChangeTopText.bind(this)
    this.onChangeBottomText = this.onChangeBottomText.bind(this)
    this.onChangeImgUrl = this.onChangeImgUrl.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChangeTopText(e) {
    this.setState({
      top_text: e.target.value,
    })
  }    
  onChangeBottomText(e) {
    this.setState({
      bottom_text: e.target.value,
    })
  }    
  onChangeImgUrl(e) {
    this.setState({
      image_url: e.target.value,
    })
  }
  
  onSubmit() {
    var url = 'http://localhost:3001/createMeme'
    var data = this.state
    console.log("about to fetch", data)
  fetch(url, {

    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      'Content-Type': 'application/json'
    }
    }).then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
  }


  render() {
  
    return (
      <div className="App">
        <NavLink exact to="/"><i className="material-icons">home</i></NavLink>
        <div className="column">
          
            <div>
              <div className="input-field col s6">
                <input id="top-text" type="text" className="validate" onChange={this.onChangeTopText}></input>
                <label htmlFor="top-text">Top Text</label>
              </div>
              <div className="input-field col s6">
                <input id="bottom-text" type="text" className="validate" onChange={this.onChangeBottomText}></input>
                <label htmlFor="bottom-text">Bottom Text</label>
              </div>
              <div className="input-field col s6">
                <input id="image-url" type="text" className="validate" onChange={this.onChangeImgUrl}></input>
                <label htmlFor="image-url">Image_URL</label>
              </div>
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.onSubmit}>Submit
              <i className="material-icons right">send</i>
            </button>
         
          </div>
        </div>
    );
  }
}

export default CreateMeme
