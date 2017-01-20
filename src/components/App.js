import React, { Component } from 'react';
import '../stylesheets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid'

import Navbarz from './Navbar/Navbarz'
import Lists from './Lists/Lists'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lists: [
        {
          listid: uuid.v4(),
          listTitle: {
            name: 'new Lane',
            change: false
          },
          cards: [
            {
              id: uuid.v4(),
              title: {
                name: 'Click me to Edit!1',
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
                name: 'Click me to Edit2!',
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
          listid: uuid.v4(),
          listTitle: {
            name: 'new Lane',
            change: false
          },
          cards: [
            {
              id: uuid.v4(),
              title: {
                name: 'Click me to Edit!3',
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
                name: 'Click me to Edit!4',
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
          changeListTitle={this._changeListTitle}
          editListTitle={this._editListTitle}
        />
      </div>
    );
  }

  // add cards broken!!!
  _addList = () => {
    this.setState({
      lists: this.state.lists.concat([{
        listid: uuid.v4(),
        listTitle: {
          name: 'new Lane',
          change: false
        },
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

  _addCards = (listid) => {
    this.setState({
      lists: this.state.lists.map(list => {
        if(list.listid === listid) {
          list.cards.push({
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
          })
        }

        return list 
      })
    })
  }

  _activateModal = (id) => {
    this.setState({
      lists: this.state.lists.map(list => {
        list.cards.map(card => {
          if(card.id === id) {
            card.modal = true
          }

          return card
        })

        return list
      })
    })
  }

  _closeModal = (id) => {
    this.setState({
      lists: this.state.lists.map(list => {
        list.cards.map(card => {
          if(card.id === id) {
            card.modal = false
          }

          return card
        })

        return list
      })
    })
  }

  _titleChange = (id) => {
    this.setState({
      lists: this.state.lists.map(list => {
        list.cards.map(card => {
          if(card.id === id) {
            card.title.change = true
          }

          return card
        })

        return list
      })
    })
  }

  _textChange = (id) => {
    this.setState({
      lists: this.state.lists.map(list => {
        list.cards.map(card => {
          if(card.id === id) {
            card.text.change = true
          }

          return card
        })

        return list
      })
    })
  }

  _editModalTitle = (id, title) => {
    this.setState({
      lists: this.state.lists.map(list => {
        list.cards.map(card => {
          if(card.id === id) {
            card.title.change = false
            card.title.name = title
          }

          return card
        })

        return list
      })
    })
  }

  _editModalText = (id, text) => {
    this.setState({
      lists: this.state.lists.map(list => {
        list.cards.map(card => {
          if(card.id === id) {
            card.text.change = false
            card.text.name = text
          }

          return card
        })

        return list
      })
    })
  }

  _changeListTitle = (listid) => {
    this.setState({
      lists: this.state.lists.map(list => {
        if(list.listid === listid) {
          list.listTitle.change = true
        }

        return list
      })
    })
  }

  _editListTitle = (listid, name) => {
    this.setState({
      lists: this.state.lists.map(list => {
        if(list.listid === listid) {
          list.listTitle.change = false
          list.listTitle.name = name
        }
      })
    })
  }
}

export default App;