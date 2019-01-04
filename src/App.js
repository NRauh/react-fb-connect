import React, { Component } from 'react';
import db from './firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  };

  componentDidMount() {
    this.userRef = db.collection('users').doc('ibtNkmsRz2nhoKTAZHDs');

    this.userRef.onSnapshot((doc) => {
      const user = doc.data();
      this.setState(user);
    });
  }

  setName = (e) => {
    this.userRef.update({
      name: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <input
          onChange={this.setName}
          value={this.state.name}
        />
      </div>
    );
  }
}

export default App;
