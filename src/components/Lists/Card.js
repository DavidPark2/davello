import React, { PropTypes } from 'react'
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';

const Card = ({title, activateModal}) => (
  <div onClick={activateModal}>
    <ListGroupItem onClick={activateModal}>{title}</ListGroupItem>
  </div>
)

export default Card

Card.propTypes = {
  title: PropTypes.string.isRequired,
  activateModal: PropTypes.func
}
// <Button onClick={activateModal} bsSize="large" block>{title}</Button>