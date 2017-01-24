import React, {PropTypes} from 'react'
import '../../stylesheets/css/Navbar.css'

const Navbarz = ({mouseOver, mouseOut, navDownDrop}) => (
  <nav className="navbarBackground">
    <div>
      <a href="#!" className="nav-toggle"><span></span></a>
    </div>
    <ul className="nav-list">
      <li><a href="#!">Home</a></li>
      <li><a href="#!">About</a></li>
      <li><a href="#!" onMouseOver={mouseOver} onMouseOut={mouseOut}>Services</a>
        <ul className={navDownDrop}>
          <li><a href="#!">Web Design</a></li>
          <li><a href="#!">Web Development</a></li>
          <li><a href="#!">Graphic Design</a></li>
        </ul>
      </li>
      <li><a href="#!">Pricing</a></li>
      <li><a href="#!">Contact</a></li>
    </ul>
  </nav>
)

Navbarz.propTypes = {

}

export default Navbarz