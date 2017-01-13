import React from 'react'
import { Button, Col, Grid, Row, Modal } from 'react-bootstrap'
import Card from './Card'
import CardModal from './CardModal'
import '../stylesheets/css/Cards.css'

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

const Cards = ({list, addCard, activateModal, editModal}) => (
  <div>
    <Grid>
      <Row>
        <Col sm={3}>
          <ul>{list.map(({id, card}) =>
            <li className="cardList" key={id}>
              <Card>
                <Button bsSize="large" block>{card}</Button>
              </Card>
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