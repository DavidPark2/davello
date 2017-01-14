import React from 'react'
import { Button, Modal, OverlayTrigger } from 'react-bootstrap';
import ModalDefault from './ModalDefault'

const CardModal = ({modal, closeModal, text, 
title, editModal, textChange, titleChange}) => {
	switch(true) {
		case textChange:

		case titleChange:

		default:
			return <ModalDefault
				modal={modal}
				text={text}
				closeModal={closeModal}
				title={title}
			/>
	}
}



export default CardModal
