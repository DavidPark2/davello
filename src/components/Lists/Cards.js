import React, { PropTypes } from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import Card from './Card'
import CardModal from './CardModal'
import '../../stylesheets/css/Cards.css'

const Cards = ({cards, addCards, activateModal, editModalTitle, closeModal, 
titleChanging, textChanging, editModalText}) => (
  <div>
    <ListGroup>
      <ul>{cards.map(({id, title, text, modal}) =>
        <li className="cardList" key={id}>
          
          <Card 
            title={title.name}
            activateModal={activateModal.bind(null, id)}
          />
          <CardModal
            modal={modal}
            closeModal={closeModal.bind(null, id)}
            text={text.name}
            textChange={text.change}
            title={title.name}
            titleChange={title.change}
            editModalTitle={editModalTitle.bind(null, id)}
            titleChanging={titleChanging.bind(null, id)}
            textChanging={textChanging.bind(null, id)}
            editModalText={editModalText.bind(null, id)}
          />
        </li>
      )}
      <Button className="cardButtonCenter" onClick={addCards} bsStyle="danger">add card</Button>
      </ul>
    </ListGroup>
  </div>
)

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.shape({
      name: PropTypes.string.isRequired,
      change: PropTypes.bool.isRequired
    }).isRequired,
    modal: PropTypes.bool.isRequired,
    text: PropTypes.shape({
      name: PropTypes.string.isRequired,
      change: PropTypes.bool.isRequired
    }).isRequired
  }).isRequired).isRequired,
  addCards: PropTypes.func.isRequired,
  activateModal: PropTypes.func.isRequired,
  editModalTitle: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  titleChanging: PropTypes.func.isRequired,
  textChanging: PropTypes.func.isRequired,
  editModalText: PropTypes.func.isRequired
}

export default Cards