import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from 'containers/Home'
import Header from 'containers/Header'
import Contact from 'containers/Contact'
import Snippets from 'containers/Snippets'

const Router = () => (
  <BrowserRouter basename='/'>
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/snippets' component={Snippets} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
)

export default Router
