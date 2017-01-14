import React from 'react'
import { Button, Modal, OverlayTrigger } from 'react-bootstrap';

const CardModal = ({modal, closeModal, text, title, editModal}) => (
  <div className="static-modal">
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
);

// const CardModal = ({{modal, closeModal, text, card, editModal}}) => {
// 	if(modal) {
// 		return <Edit 
			
// 		/>
// 	}

// 	return
// }



export default CardModal
