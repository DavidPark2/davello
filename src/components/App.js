import React, { Component } from 'react';
import '../stylesheets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid'

import Navbarz from './Navbarz'
import Cards from './Cards'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cards: [
        {
          id: uuid.v4(),
          title: {
            name: 'Click me to Edit!',
            change: false
          },
          modal: false,
          text: {
            name: 'Click me to Edit ALSO!',
            change: false
          }
        },
        {
          id: uuid.v4(),
          title: {
            name: 'Click me to Edit!',
            change: false
          },
          modal: false,
          text: {
            name: 'Click me to Edit ALSO!',
            change: false
          }
        }
      ],
      list: [
        {
          id: uuid.v4(),
          name: 'new list'
        }
      ]
    }

    this.state = {
      lists: [
        {
          id: uuid.v4,
          name: 'new Lane',
          cards: [
            {
              id: uuid.v4(),
              title: {
                name: 'Click me to Edit!',
                change: false
              },
              modal: false,
              text: {
                name: 'Click me to Edit Also'
              }
            },
            {
              id: uuid.v4(),
              title: {
                name: 'Click me to Edit!',
                change: false
              },
              modal: false,
              text: {
                name: 'Click me to Edit Also'
              }
            }
          ]
        },
        {
          id: uuid.v4,
          name: 'new Lane',
          cards: [
            {
              id: uuid.v4(),
              title: {
                name: 'Click me to Edit!',
                change: false
              },
              modal: false,
              text: {
                name: 'Click me to Edit Also'
              }
            },
            {
              id: uuid.v4(),
              title: {
                name: 'Click me to Edit!',
                change: false
              },
              modal: false,
              text: {
                name: 'Click me to Edit Also'
              }
            }
          ]
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {this.props.test}
        <Navbarz />
        <Cards
          cards={this.state.cards}
          addCard={this._addCards}
          activateModal={this._activateModal}
          closeModal={this._closeModal}
          editModalTitle={this._editModalTitle}
          titleChanging={this._titleChange}
          textChanging={this._textChange}
          editModalText={this._editModalText}
        />
      </div>
    );
  }

  _addCards = () => {
    this.setState({
      cards: this.state.cards.concat([{
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
      cards: this.state.cards.map(note => {
        if(note.id === id) {
          note.modal = true
        }

        return note
      })
    })
  }

  _closeModal = (id) => {
    this.setState({
      cards: this.state.cards.map(note => {
        if(note.id === id) {
          note.modal = false
        }

        return note
      })
    })
  }

  _titleChange = (id) => {
    this.setState({
      cards: this.state.cards.map(note => {
        if(note.id === id) {
          note.title.change = true
        }

        return note
      })
    })
  }

  _textChange = (id) => {
    this.setState({
      cards: this.state.cards.map(note => {
        if(note.id === id) {
          note.text.change = true
        }

        return note
      })
    })
  }

  _editModalTitle = (id, title) => {
    this.setState({
      cards: this.state.cards.map(note => {
        if(note.id === id) {
          note.title.change = false
          note.title.name = title
        }

        return note
      })
    })
  }

  _editModalText = (id, text) => {
    this.setState({
      cards: this.state.cards.map(note => {
        if(note.id === id) {
          note.text.change = false
          note.text.name = text
        }

        return note
      })
    })
  }
}

export default App;