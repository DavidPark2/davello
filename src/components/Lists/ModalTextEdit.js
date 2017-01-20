import React, {PropTypes} from 'react'

class ModalTextEdit extends React.Component {
	render() {
		const {editModalText, text} = this.props

		return (
			<input 
				type='text'
				autoFocus={true}
				defaultValue={text}
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

		if(this.props.editModalText) {
			this.props.editModalText(value)
		}
	}
}

ModalTextEdit.propTypes = {
  text: PropTypes.string.isRequired,
  editModalText: PropTypes.func.isRequired
}

export default ModalTextEdit