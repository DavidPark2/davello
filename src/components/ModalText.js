import React, {PropTypes} from 'react'
import ModalTitleEdit from './ModalTextEdit'

const ModalTitle = ({titleChange, title, editModalTitle}) => {
	if(titleChange) {
		return <ModalTitleEdit 
			editModalTitle={editModalTitle}
			title={title}
		/>
	}

	return <span>{title}</span>
}

ModalTitle.propTypes = {
  titleChange: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  editModalTitle: PropTypes.func.isRequired
}

export default ModalTitle