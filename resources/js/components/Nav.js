import React from 'react'
import NavBtn from './NavBtn'

const Nav = () => {
  return (
    <nav className='shadow z-10'>
      <ul className='list-reset flex'>
        <li>
          <NavBtn to='/' icon='list-ul'>
            Dashboard
          </NavBtn>
        </li>
        <li className='ml-auto'>
          <NavBtn to='/register' icon='user-plus'>
            Register
          </NavBtn>
        </li>
        <li>
          <NavBtn to='/login' icon='sign-in-alt'>
            Sign In
          </NavBtn>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
