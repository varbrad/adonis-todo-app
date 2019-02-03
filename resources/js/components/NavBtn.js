import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const NavBtn = ({ children, icon, to }) => {
  return (
    <NavLink
      exact
      to={to}
      className='block px-6 pt-6 pb-4 border-b-2 border-transparent no-underline text-xs text-purple uppercase font-bold'
      activeClassName='border-purple'
    >
      {icon && <Icon className='mr-2' icon={icon} />}
      {children}
    </NavLink>
  )
}

NavBtn.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  to: PropTypes.string.isRequired,
}

export default NavBtn
