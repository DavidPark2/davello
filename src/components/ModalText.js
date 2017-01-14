import React from 'react'
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





export default ModalText