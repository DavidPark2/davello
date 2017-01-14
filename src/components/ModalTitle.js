import React from 'react'
import ModalTitleEdit from './ModalTitleEdit'

const ModalTitle = ({titleChange, title, editModalTitle}) => {
	if(titleChange) {
		return <ModalTitleEdit 
			editModalTitle={editModalTitle}
			title={title}
		/>
	}

	return <span>{title}</span>
}



export default ModalTitle