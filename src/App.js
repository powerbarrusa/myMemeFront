import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      memes: ""
    }
  }

  async componentDidMount(){
    try {
      const api = await fetch('http://localhost:3001')
      const memes = await api.json()
      this.setState({
        memes: memes
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        {this.state.memes ? <img src={this.state.memes[0].image_url}></img> : ""}
        <a href="form.js" class="btn-floating btn-large waves-effect waves-light red" onSubmit="return false"><i class="material-icons" >add</i></a>

=======
        <div className="row">
          <p className="col s8 m4 offset-s2 offset-m4">myMeme</p>
          <a href="/#" className="z-depth-5 col s8 m4 offset-s2 offset-m4 waves-effect waves-light btn red">button</a>
          <a href="/#" className="z-depth-5 col s8 m4 offset-s2 offset-m4 waves-effect waves-light btn blue">button</a>
          <a href="/#" className="z-depth-5 col s8 m4 offset-s2 offset-m4 waves-effect waves-light btn green">button</a>
        </div>
>>>>>>> 922d4e11db188ef78e885b54f15b749628e790ac
      </div>
    )
  }
}

export default App;
