import React, { Component } from 'react';
import '../stylesheets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid'

import Navbarz from './Navbarz'
import Lists from './Lists'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lists: [
        {
          id: uuid.v4(),
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
                name: 'Click me to Edit Also',
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
                name: 'Click me to Edit Also',
                change: false
              }
            }
          ]
        },
        {
          id: uuid.v4(),
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
                name: 'Click me to Edit Also',
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
                name: 'Click me to Edit Also',
                change: false
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
        <Navbarz />
        <Lists
          lists={this.state.lists}
          addCards={this._addCards}
          addList={this._addList}
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

  // add cards broken!!!
  _addCards = (id) => {
    this.setState({
      lists: this.state.lists.map(list => {
        if(list.id === id) {
          list.cards.concat([{
            id: uuid.v4(),
            title: {
              name: 'Click me to Edit!',
              change: false
            },
            modal: false,
            text: {
              name: 'Click me to Edit Also',
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
              name: 'Click me to Edit Also',
              change: false
            }
          }])
        } 
        
        
      })
    })
  }

  _addList = () => {
    this.setState({
      lists: this.state.lists.concat([{
        id: uuid.v4(),
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
              name: 'Click me to Edit Also',
              change: false
            }
          }
        ]
      }])
    })
  }

  _activateModal = (id) => {
    this.setState({
      lists: this.state.lists.map(list => {
        list.cards.map(cards => {
          if(cards.id === id) {
            cards.modal = true
          }

          return cards
        })
      })
    })
  }

  _closeModal = (id) => {
    this.setState({
      lists: this.state.lists.map(list => {
        list.cards.map(cards => {
          if(cards.id === id) {
            cards.modal = false
          }

          return cards
        })
      })
    })
  }

  _titleChange = (id) => {
    this.setState({
      lists: this.state.lists.map(list => {
        list.cards.map(cards => {
          if(cards.id === id) {
            cards.title.change = true
          }

          return cards
        })
      })
    })
  }

  _textChange = (id) => {
    this.setState({
      lists: this.state.lists.map(list => {
        list.cards.map(cards => {
          if(cards.id === id) {
            cards.text.change = true
          }

          return cards
        })
      })
    })
  }

  _editModalTitle = (id, title) => {
    this.setState({
      lists: this.state.lists.map(list => {
        list.cards.map(cards => {
          if(cards.id === id) {
            cards.title.name = title
          }

          return cards
        })
      })
    })
  }

  _editModalText = (id, text) => {
    this.setState({
      lists: this.state.lists.map(list => {
        list.cards.map(cards => {
          if(cards.id === id) {
            cards.text.change = false
            cards.text.name = text
          }

          return cards
        })
      })
    })
  }
}

export default App;