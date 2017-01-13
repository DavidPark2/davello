import React from 'react'
import { Button, Col, Grid, Row, Modal } from 'react-bootstrap'
import Card from './Card'
import CardModal from './CardModal'
import '../stylesheets/css/Cards.css'

// 1
// const Cards = ({list, addCard, activateModal, editModal}) => (
//   <div>
//     <Card 
//       list={list}
//       addCard={addCard}
//       activateModal={activateModal.bind(null, list.id)}
//     />
//     <CardModal
//       list={list}
//     />
//   </div>
// )

// 2
const Cards = ({list, addCard, activateModal, editModal, closeModal}) => (
  <div>
    <Grid>
      <Row>
        <Col sm={3}>
          <ul>{list.map(({id, card, text, modal}) =>
            <li className="cardList" key={id}>
              <Card 
                card={card}
                activateModal={activateModal.bind(null, id)}
              />
              <CardModal
                modal={modal}
                closeModal={closeModal.bind(null, id)}
              />
            </li>
          )}
          <Button onClick={addCard} bsStyle="danger">add card</Button>
          </ul>
        </Col>
      </Row>
    </Grid>
  </div>
)


export default Cards