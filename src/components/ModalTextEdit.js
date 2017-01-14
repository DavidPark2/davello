import React from 'react'

class ModalTextEdit extends React.Component {
	render() {
		const {text, editModalText} = this.props

		return (
			<textarea 
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

export default ModalTextEdit