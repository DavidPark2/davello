import React, { Component } from 'react';
import logo from '../logo.svg';
import '../stylesheets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid'

import Navbarz from './Navbarz'
import Cards from './Cards'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [
        {
          id: uuid.v4(),
          card: 'sup'
        },
        {
          id: uuid.v4(),
          card: 'hey'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Navbarz />
        <Cards
          list={this.state.list}
        />
      </div>
    );
  }


}

export default App;
//TODO - look into materialize