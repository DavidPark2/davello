import React from 'react'
import { Button, Col, Grid, Row, ButtonGroup } from 'react-bootstrap';

// const Card = ({list, addCard, activateModal, editModal}) => (
// 	<div>
// 		<Grid>
//       <Row>
//         <Col sm={3}>
//           <ul>{list.map(({id, card}) =>
//             <li className="cardList" key={id}>
//               <Button bsSize="large" block>{card}</Button>
//             </li>
//           )}
//           <Button onClick={addCard} bsStyle="danger">add card</Button>
//           </ul>
//         </Col>
//       </Row>
//     </Grid>
// 	</div>
// )

// 2
const Card = ({card, activateModal}) => (
  <div>
    <Button onClick={activateModal} bsSize="large" block>{card}</Button>
  </div>
)

export default Card