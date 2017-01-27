import React, {PropTypes} from 'react'
import { Navbar } from 'react-bootstrap';
import '../../stylesheets/css/Navbar.css'

const Navbarz = ({navMouseOver, navMouseOut, navDownDrop}) => (
  <nav className="navbarBackground">
    <div className="nav-mobile">
      <a href="#!" className="nav-toggle"><span></span></a>
    </div>
    <ul className="nav-list">
      <li><a href="#!">Home</a></li>
      <li><a href="#!">About</a></li>
      <li><a href="#!" onMouseOver={navMouseOver} onMouseOut={navMouseOut}>Services</a>
        <ul className={navDownDrop} onMouseOver={navMouseOver} onMouseOut={navMouseOut}>
          <li><a href="#!">Web Design</a></li>
          <li><a href="#!">Web Development</a></li>
          <li><a href="#!">Graphic Design</a></li>
        </ul>
      </li>
      <li><a href="#!">Pricing</a></li>
      <li><a href="#!">Contact</a></li>
    </ul>

    <div>
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a>Davello</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    </div>
  </nav>
)

//TODO: need to add active className to line 7, onClick

Navbarz.propTypes = {
  mouseOver: PropTypes.func.isRequired,
  mouseOut: PropTypes.func.isRequired,
  navDownDrop: PropTypes.string.isRequired
}

export default Navbarz