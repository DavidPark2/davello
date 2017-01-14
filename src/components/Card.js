import React from 'react'
import { Button } from 'react-bootstrap';

const Card = ({title, activateModal}) => (
  <div>
    	<Button onClick={activateModal} bsSize="large" block>{title}</Button>
  </div>
)

export default Card