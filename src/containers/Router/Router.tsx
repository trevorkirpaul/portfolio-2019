import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../Home'
import Header from '../Header'
import Contact from '../Contact'

const Router = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
)

export default Router
