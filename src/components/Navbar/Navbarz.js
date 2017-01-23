import React from 'react'
import '../../stylesheets/css/Navbar.css'

const Navbarz = () => (
  // <div>
  //   <Navbar inverse>
  //     <Navbar.Header>
  //       <Navbar.Brand>
  //         <a>Davello</a>
  //       </Navbar.Brand>
  //     </Navbar.Header>
  //   </Navbar>
  // </div>

  <nav className="navbarBackground">
    <div>
      <a href="#!" className="nav-toggle"><span></span></a>
    </div>
    <ul className="nav-list">
      <li><a href="#!">Home</a></li>
      <li><a href="#!">About</a></li>
      <li><a href="#!">Services</a>
        <ul className="nav-dropdown">

        </ul>
      </li>
    </ul>
  </nav>
)

export default Navbarz