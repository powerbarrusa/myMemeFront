import React, { Component } from 'react';

class App extends Component {

  render() {
    console.log(this.state.memes)
    return (
      <div className="App">
        
        <a href="/components/form.js" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>

      </div>
    );
  }
}

export default App;
