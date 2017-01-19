import React, { PropTypes } from 'react'
import { Button, Modal } from 'react-bootstrap';
import ModalText from './ModalText'

const CardModal = ({modal, closeModal, text, title, editModalTitle, 
textChange, titleChange, titleChanging, textChanging, editModalText}) => (
	<div>
		<Modal show={modal}>
	    <Modal.Header>
	      <Modal.Title onClick={titleChanging}>
					<ModalText
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
          titleChange={textChange}
					// boolean
          title={text}
					// string(text)
          editModalTitle={editModalText}
	      />
	    </Modal.Body>

	    <Modal.Footer>
	      <Button onClick={closeModal}>close</Button>
	      <Button bsStyle="primary">Save changes</Button>
	    </Modal.Footer>
    </Modal>
	</div>
)

CardModal.propTypes = {
	modal: PropTypes.bool.isRequired,
	closeModal: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  editModalTitle: PropTypes.func.isRequired,
  textChange: PropTypes.bool.isRequired,
  titleChange: PropTypes.bool.isRequired,
  titleChanging: PropTypes.func.isRequired,
  textChanging: PropTypes.func.isRequired,
  editModalText: PropTypes.func.isRequired
}

export default CardModal
