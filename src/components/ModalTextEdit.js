import React, {PropTypes} from 'react'

class ModalTitleEdit extends React.Component {
	render() {
		const {editModalTitle, title} = this.props

		return (
			<input 
				type='text'
				autoFocus={true}
				defaultValue={title}
				onBlur={this.finishEdit}
				onKeyPress={this.checkEnter}
			/>
		)
	}

	checkEnter = (e) => {
		if(e.key === 'Enter') {
			this.finishEdit(e)
		}
	}

	finishEdit = (e) => {
		const value = e.target.value

		if(this.props.editModalTitle) {
			this.props.editModalTitle(value)
		}
	}
}

ModalTitleEdit.propTypes = {
  title: PropTypes.string.isRequired,
  editModalTitle: PropTypes.func.isRequired
}

export default ModalTitleEdit