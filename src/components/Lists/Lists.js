import React, { PropTypes } from 'react'
import { Button, Col, Grid, Row } from 'react-bootstrap'
import Cards from './Cards'
import '../../stylesheets/css/List.css'
import ModalText from './ModalText'

const Lists = ({lists, addList, activateModal, closeModal,
editModalText, editModalTitle, titleChanging,
textChanging, addCards, changeListTitle, editListTitle}) => (
  //TODO: fix lane 21!!!!!!!!
	<div>
		<Grid>
			<Row>{lists.map(({listid, listTitle, cards}) =>
				<Col xs={4} key={listid} className="backgroundColor">
					<div className="listCenter" onClick={changeListTitle.bind(null, listid)}>
            {/*{listTitle.name}*/}

            <ModalText
              textChange={listTitle.change}
              text={listTitle.name}
              editModalText={editListTitle.bind(null, listid)}
            />
          </div>
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
    listTitle: PropTypes.shape({
      name: PropTypes.string.isRequired,
      change: PropTypes.bool.isRequired
    }).isRequired,
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
	addList: PropTypes.func.isRequired,
  activateModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  editModalText: PropTypes.func.isRequired,
  editModalTitle: PropTypes.func.isRequired,
  titleChanging: PropTypes.func.isRequired,
  textChanging: PropTypes.func.isRequired,
  addCards: PropTypes.func.isRequired,
  changeListTitle: PropTypes.func.isRequired,
  editListTitle: PropTypes.func.isRequired
}

export default Lists