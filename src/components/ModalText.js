import React, { PropTypes } from 'react'
import ModalTextEdit from './ModalTextEdit'

const ModalText = ({textChange, text, editModalText}) => {
	if(textChange) {
		return <ModalTextEdit
			text={text}
			editModalText={editModalText}
		/>
	}

	return <span>{text}</span>
}

ModalText.propTypes = {
  textChange: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  editModalText: PropTypes.func.isRequired
}

export default ModalText