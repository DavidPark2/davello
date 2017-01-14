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
          title: {
            name: 'sup',
            change: false
          },
          modal: false,
          text: {
            name: 'Sup man',
            change: false
          }
        },
        {
          id: uuid.v4(),
          title: {
            name: 'hey',
            change: false
          },
          modal: false,
          text: {
            name: 'hey hey hey man',
            change: false
          }
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
          titleChanging={this._titleChange}
          textChanging={this._textChange}
        />
      </div>
    );
  }

  _addCards = () => {
    this.setState({
      list: this.state.list.concat([{
      id: uuid.v4(),
        title: {
          name: 'new card',
          change: false
        },
        modal: false,
        text: {
          name: 'new card',
          change: false
        }
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

  _titleChange = (id) => {
    this.setState({
      list: this.state.list.map(note => {
        if(note.id === id) {
          note.title.change = true
        }

        return note
      })
    })
  }

  _textChange = (id) => {
    this.setState({
      list: this.state.list.map(note => {
        if(note.id === id) {
          note.text.change = true
        }

        return note
      })
    })
  }

  _editModal = (id, text, title) => {
    this.setState({
      list: this.state.list.map(note => {
        if(note.id === id) {
          note.modal = false
          note.text = text
          note.title = title
        }

        return note
      })
    })
  }


}

export default App;
//TODO - look into materialize