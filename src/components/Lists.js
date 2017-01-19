import React, { PropTypes } from 'react'
import { Button, Col, Grid, Row } from 'react-bootstrap'
import Cards from './Cards'
import '../stylesheets/css/List.css'

const Lists = ({lists, addList, activateModal, closeModal,
editModalText, editModalTitle, titleChanging,
textChanging, addCards}) => (
	<div>
		<Grid>
			<Row>{lists.map(({listid, name, cards}) =>
				<Col xs={4} key={listid} className="backgroundColor">
					<h1 className="listCenter">{name}</h1>
					<Cards 
						cards={cards}
						activateModal={activateModal}
						closeModal={closeModal}
						editModalText={editModalText}
						editModalTitle={editModalTitle}
						titleChanging={titleChanging}
						textChanging={textChanging}
						addCards={addCards.bind(null, listid)}
					/>
				</Col>
			)}
			<Button onClick={addList} bsStyle="danger">Add List</Button>
			</Row>
		</Grid>
	</div>
)

Lists.propTypes = {
	lists: PropTypes.arrayOf(PropTypes.shape({
		listid: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		cards: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.shape({
				name: PropTypes.string.isRequired,
				change: PropTypes.bool.isRequired
			}).isRequired,
			modal: PropTypes.bool.isRequired,
			text: PropTypes.shape({
        name: PropTypes.string.isRequired,
        change: PropTypes.bool.isRequired
			}).isRequired
		}).isRequired).isRequired
	}).isRequired).isRequired,
	addList: PropTypes.func,
  activateModal: PropTypes.func,
  closeModal: PropTypes.func,
  editModalText: PropTypes.func,
  editModalTitle: PropTypes.func,
  titleChanging: PropTypes.func,
  textChanging: PropTypes.func,
  addCards: PropTypes.func
}

export default Lists