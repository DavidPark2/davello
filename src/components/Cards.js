import React from 'react'
import { Button, Col, Grid, Row } from 'react-bootstrap';
import '../stylesheets/css/Cards.css'

const Cards = ({list}) => (
  <div>
    <Grid>
      <ul>{list.map(({id, card}) =>
        <Row>
          <Col sm={6} md={3}>
            <li key={id} className="cardList">
              {card}
            </li>
          </Col>
        </Row>
      )}
      </ul>
      <Button bsStyle="danger">add card</Button>
    </Grid>
  </div>
)

export default Cards