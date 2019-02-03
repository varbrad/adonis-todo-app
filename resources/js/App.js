import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'

const Index = () => <div>Index</div>
const Page = () => <div>Page</div>

const App = () => {
  return (
    <Router>
      <div className='w-full h-full flex flex-col'>
        <Nav />
        <div className='flex-grow'>
          <Switch>
            <Route exact path='/' component={Index} />
            <Route exact path='/page' component={Page} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
