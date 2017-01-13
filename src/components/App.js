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
          card: 'sup',
          modal: false,
          text: 'Sup man'
        },
        {
          id: uuid.v4(),
          card: 'hey',
          modal: false,
          text: 'hey hey hey man'
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
          addCard={this._addCards}
          activateModal={this._activateModal}
          closeModal={this._closeModal}
          editModal={this._editModal}
        />
      </div>
    );
  }

  _addCards = () => {
    this.setState({
      list: this.state.list.concat([{
        id: uuid.v4(),
        card: 'New Card'
      }])
    })
  }

  _activateModal = (id) => {
    this.setState({
      list: this.state.list.map(note => {
        if(note.id === id) {
          note.modal = true
        }

        return note
      })
    })
  }

  _closeModal = (id) => {
    this.setState({
      list: this.state.list.map(note => {
        if(note.id === id) {
          note.modal = false
        }

        return note
      })
    })
  }

  _editModal = (id, text, card) => {
    this.setState({
      list: this.state.list.map(note => {
        if(note.id === id) {
          note.modal = false
          note.card = card
          note.text = text
        }
      })
    })
  }


}

export default App;
//TODO - look into materialize