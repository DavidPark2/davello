import React, {PropTypes} from 'react'
import Navbarz from '../components/Navbar/Navbarz'

const NavBarzHideDropDown = ({navDropDown, mouseOver, mouseOut}) => {
  if (navDropDown) {
    return <Navbarz
      mouseOver={mouseOver}
      mouseOut={mouseOut}
      navDownDrop='nav-dropdown-show'
    />
  }

  return <Navbarz
    mouseOut={mouseOut}
    mouseOver={mouseOver}
    navDownDrop='nav-dropdown-hide'
  />
}

NavBarzHideDropDown.propTypes = {
  navDropDown: PropTypes.bool.isRequired,
  mouseOver: PropTypes.func.isRequired,
  mouseOut: PropTypes.func.isRequired
}

export default NavBarzHideDropDown