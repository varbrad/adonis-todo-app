import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './scenes/Home'

const App = () => {
  return (
    <Router>
      <div className='w-full h-full flex flex-col bg-white font-sans'>
        <Nav />
        <div className='flex-grow bg-grey-light'>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
