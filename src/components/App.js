import React, { Component } from 'react';
import '../stylesheets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid'

import NavBarzHideDropDown from '../container/NavbarzHideDropDown'
import Lists from './Lists/Lists'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      navbar: false,
      mobileNavBar: false,
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
        <NavBarzHideDropDown
          navDropDown={this.state.navbar}
          navMouseOver={this.navMouseOver}
          navMouseOut={this.navMouseOut}
          mobileNavBar={this.state.mobileNavBar}
          mobileNavBarShow={this.mobileNavBarShow}
          mobileNavBarHide={this.mobileNavBarHide}

        />
        <Lists
          lists={this.state.lists}
          addCards={this.addCards}
          addList={this.addList}
          activateModal={this.activateModal}
          closeModal={this.closeModal}
          editModalTitle={this.editModalTitle}
          titleChanging={this.titleChange}
          textChanging={this.textChange}
          editModalText={this.editModalText}
          changeListTitle={this.changeListTitle}
          editListTitle={this.editListTitle}
        />
      </div>
    );
  }

  // add cards broken!!!
  addList = () => {
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

  addCards = (listid) => {
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

  activateModal = (id) => {
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

  closeModal = (id) => {
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

  titleChange = (id) => {
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

  textChange = (id) => {
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

  editModalTitle = (id, title) => {
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

  editModalText = (id, text) => {
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

  changeListTitle = (listid) => {
    this.setState({
      lists: this.state.lists.map(list => {
        if(list.listid === listid) {
          list.listTitle.change = true
        }

        return list
      })
    })
  }

  editListTitle = (listid, name) => {
    this.setState({
      lists: this.state.lists.map(list => {
        if(list.listid === listid) {
          list.listTitle.change = false
          list.listTitle.name = name
        }

        return list
      })
    })
  }

  navMouseOver = () => {
    this.setState({
      navbar: true
    })
  }

  navMouseOut = () => {
    this.setState({
      navbar: false
    })
  }

  mobileNavBarShow = () => {
    this.setState({
      mobileNavBar: true
    })
  }


  mobileNavBarHide = () => {
    this.setState({
      mobileNavBarShow: false
    })
  }

}

export default App;