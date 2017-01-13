import React from 'react'
import { Button, Modal, OverlayTrigger } from 'react-bootstrap';

const CardModal = ({editModal}) => (
  <div className="static-modal">
	  <Modal show={editModal}>
	      <Modal.Header>
	        <Modal.Title>Modal title</Modal.Title>
	      </Modal.Header>

	      <Modal.Body>
	        One fine body...
	      </Modal.Body>

	      <Modal.Footer>
	        <Button>Close</Button>
	        <Button bsStyle="primary">Save changes</Button>
	      </Modal.Footer>
    </Modal>
  </div>
);

export default CardModal

	    // <Modal.Footer>
	    //   <Button onClick={this.close}>Close</Button>
	    // </Modal.Footer>