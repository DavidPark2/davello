import React from 'react'
import { Button, Modal, OverlayTrigger } from 'react-bootstrap';

const ModalDefault = ({modal, text, closeModal, title}) => (
	<div>
		<Modal show={modal}>
	    <Modal.Header>
	      <Modal.Title>{title}</Modal.Title>
	    </Modal.Header>

	    <Modal.Body>
	      {text}
	    </Modal.Body>

	    <Modal.Footer>
	      <Button onClick={closeModal}>close</Button>
	      <Button bsStyle="primary">Save changes</Button>
	    </Modal.Footer>
    </Modal>
	</div>
)

export default ModalDefault