import React from 'react'
import { Button, Col, Grid, Row, Modal } from 'react-bootstrap'
import Card from './Card'
import CardModal from './CardModal'

const Cards = ({list, addCard, activateModal, editModal}) => (
  <div>
    <Card 
      list={list}
      addCard={addCard}
      activateModal={activateModal.bind(null, list.id)}
    />
    <CardModal
      list={list}
    />
  </div>
)



export default Cards