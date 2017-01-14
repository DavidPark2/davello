import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import ModalTitle from './ModalTitle'
import ModalText from './ModalText'

const CardModal = ({modal, closeModal, text, title, editModalTitle, 
textChange, titleChange, titleChanging, textChanging, editModalText}) => (
	<div>
		<Modal show={modal}>
	    <Modal.Header>
	      <Modal.Title onClick={titleChanging}>
					<ModalTitle 
						titleChange={titleChange}
						// boolean
						title={title}
						// string(title)
						editModalTitle={editModalTitle}
					/>
	      </Modal.Title>
	    </Modal.Header>

	    <Modal.Body onClick={textChanging}>
	      <ModalText 
					textChange={textChange}
					// boolean
					text={text}
					// string(text)
					editModalText={editModalText}
	      />
	    </Modal.Body>

	    <Modal.Footer>
	      <Button onClick={closeModal}>close</Button>
	      <Button bsStyle="primary">Save changes</Button>
	    </Modal.Footer>
    </Modal>
	</div>
)

export default CardModal
