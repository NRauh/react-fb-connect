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

const FunctionApp = (props) => (
  <div>
    <h1>Hi {props.name}</h1>
    <input
      onChange={props.setName}
      value={props.name}
    />
  </div>
)

const readMap = {
  name: {
    path: 'users/ibtNkmsRz2nhoKTAZHDs',
    map: (doc) => doc.name,
  },
};

connect(readMap);

function connect(readMap) {
  const propNames = Object.keys(readMap);

  const fbRefs = propNames.reduce((refs, propName) => {
    const docPath = readMap[propName].path;
    const docRef = db.doc(docPath);

    return refs.concat(docRef);
  }, []);

  console.log(fbRefs);
}

export default App;
