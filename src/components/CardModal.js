import React from 'react'
import { Button, Modal, OverlayTrigger } from 'react-bootstrap';

const CardModal = () => (
	<div>
		<Modal show={false}>
	    <Modal.Header closeButton>
	      <Modal.Title>Modal heading</Modal.Title>
	    </Modal.Header>
	    <Modal.Body>
	      <h4>Text in a modal</h4>
	      <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

	      <h4>Popover in a modal</h4>
	      <p>there is a <OverlayTrigger overlay='Cool!'><a href="#">popover</a></OverlayTrigger> here</p>

	      <h4>Tooltips in a modal</h4>
	      <p>there is a <OverlayTrigger overlay='Awesome!!'><a href="#">tooltip</a></OverlayTrigger> here</p>

	      <hr />

	      <h4>Overflowing text to show scroll behavior</h4>
	      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
	      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
	      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
	      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
	      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
	      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
	      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
	      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
	      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
	    </Modal.Body>

	  </Modal>
	</div>
)

export default CardModal

	    // <Modal.Footer>
	    //   <Button onClick={this.close}>Close</Button>
	    // </Modal.Footer>