import React, {PropTypes} from 'react'
import Navbarz from '../components/Navbar/Navbarz'

const NavBarzHideDropDown = ({navDropDown, navMouseOver, navMouseOut, mobileNavBar,
mobileNavBarShow, mobileNavBarHide}) => {
  if (navDropDown && mobileNavBar) {
    return <Navbarz
      navMouseOver={navMouseOver}
      navMouseOut={navMouseOut}
      navDownDrop='nav-dropdown-show'
      mobileNavBarShow={mobileNavBarShow}
      mobileNavBarHide={mobileNavBarHide}
    />
  } else if ((navDropDown === true) && (mobileNavBar === false)) {
    return <Navbarz
      navMouseOver={navMouseOver}
      navMouseOut={navMouseOut}
      navDownDrop='nav-dropdown-show'
    />
  } else if ((navDropDown === false) && (mobileNavBar === true)) {

  }

  return <Navbarz
    navMouseOut={navMouseOut}
    navMouseOver={navMouseOver}
    navDownDrop='nav-dropdown-hide'
  />
}

NavBarzHideDropDown.propTypes = {
  navDropDown: PropTypes.bool.isRequired,
  mouseOver: PropTypes.func.isRequired,
  mouseOut: PropTypes.func.isRequired
}

export default NavBarzHideDropDown