import React from 'react'
import PropTypes from 'prop-types'

const Scene = ({ children }) => (
  <div className='m-4 p-6 rounded shadow bg-white'>{children}</div>
)

Scene.propTypes = {
  children: PropTypes.node,
}

export default Scene
