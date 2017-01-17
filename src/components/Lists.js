import React from 'react'
import { Button, Col, Grid, Row } from 'react-bootstrap'
import Cards from './Cards'

const Lists = ({lists, addList, activateModal, closeModal,
editModalText, editModalTitle, titleChanging,
textChanging, addCards}) => (
	<div>
		<Grid>
			<Row>{lists.map(({id, name, cards}) =>
				<Col xs={4} key={id}>
					<h1>{name}</h1>
					<Cards 
						cards={cards}
						activateModal={activateModal}
						closeModal={closeModal}
						editModalText={editModalText}
						editModalTitle={editModalTitle}
						titleChanging={titleChanging}
						textChanging={textChanging}
						addCards={addCards.bind(null, id)}
					/>
				</Col>
			)}
			<Button onClick={addList} bsStyle="danger">sup</Button>
			</Row>
		</Grid>
	</div>
)

export default Lists