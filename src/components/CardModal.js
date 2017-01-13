import React from 'react'
import { Button, Modal, OverlayTrigger } from 'react-bootstrap';

const CardModal = ({modal, closeModal}) => (
  <div className="static-modal">
	  <Modal show={modal}>
	      <Modal.Header>
	        <Modal.Title>Modal title</Modal.Title>
	      </Modal.Header>

	      <Modal.Body>
	        One fine body...
	      </Modal.Body>

	      <Modal.Footer>
	        <Button onClick={closeModal}>close</Button>
	        <Button bsStyle="primary">Save changes</Button>
	      </Modal.Footer>
    </Modal>
  </div>
);

export default CardModal
