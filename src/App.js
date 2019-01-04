import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  };

  setName = e => this.setState({ name: e.target.value });

  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <input onChange={this.setName} />
      </div>
    );
  }
}

export default App;
