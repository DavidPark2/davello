import React from 'react'
import { Button, Col, Grid, Row, Modal } from 'react-bootstrap'
import Card from './Card'
import CardModal from './CardModal'
import '../stylesheets/css/Cards.css'

const Cards = ({list, addCard, activateModal, editModal, closeModal}) => (
  <div>
    <Grid>
      <Row>
        <Col sm={3}>
          <ul>{list.map(({id, title, text, modal}) =>
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
                editModal={editModal.bind(null, id)}
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