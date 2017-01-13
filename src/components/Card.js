import React from 'react'
import { Button, Col, Grid, Row, ButtonGroup } from 'react-bootstrap';
import '../stylesheets/css/Cards.css'

const Card = ({list, addCard, activateModal}) => (
	<div>
		<Grid>
      <Row>
        <Col sm={3}>
          <ul>{list.map(({id, card}) =>
            <li className="cardList" key={id}>
              <Button bsSize="large" block>{card}</Button>
            </li>
          )}
          <Button onClick={addCard} bsStyle="danger">add card</Button>
          </ul>
        </Col>
      </Row>
    </Grid>
	</div>
)

export default Card