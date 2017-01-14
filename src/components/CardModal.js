import React from 'react'
import { Button, Modal, OverlayTrigger } from 'react-bootstrap';
import ModalTitle from './ModalTitle'
import ModalText from './ModalText'

const CardModal = ({modal, closeModal, text, title, editModal, 
textChange, titleChange, titleChanging, textChanging}) => (
	<div>
		<Modal show={modal}>
	    <Modal.Header>
	      <Modal.Title onClick={titleChanging}>
					<ModalTitle 
						titleChange={titleChange}
						title={title}
					/>
	      </Modal.Title>
	    </Modal.Header>

	    <Modal.Body onClick={textChanging}>
	      <ModalText 
					textChange={textChange}
					text={text}
	      />
	    </Modal.Body>

	    <Modal.Footer>
	      <Button onClick={closeModal}>close</Button>
	      <Button bsStyle="primary">Save changes</Button>
	    </Modal.Footer>
    </Modal>
	</div>
)

// const CardModal = ({modal, closeModal, text, 
// title, editModal, textChange, titleChange}) => {
// 	switch(true) {
// 		case textChange:

// 		case titleChange:

// 		default:
// 			return <ModalDefault
// 				modal={modal}
// 				text={text}
// 				closeModal={closeModal}
// 				title={title}
// 			/>
// 	}
// }

export default CardModal
