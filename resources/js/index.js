import '@babel/polyfill'
import React from 'react'
import { render } from 'react-dom'
import '../scss/tailwind.scss'
import App from './App'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const root = document.getElementById('root')

render(<App />, root)
