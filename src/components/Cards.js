import React from 'react'
import { Button, Col, Grid, Row } from 'react-bootstrap'
import Card from './Card'
import CardModal from './CardModal'
import '../stylesheets/css/Cards.css'

const Cards = ({cards, addCard, activateModal, editModalTitle, closeModal, 
titleChanging, textChanging, editModalText}) => (
  <div>
    <Grid>
      <Row>
        <Col xs={4}>
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
          <Button onClick={addCard} bsStyle="danger">add card</Button>
          </ul>
        </Col>
      </Row>
    </Grid>
  </div>
)


export default Cards