import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { PrivateRoute } from './components/Auth/PrivateRoute'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'

export const Routes = (): JSX.Element => {
  return (
    <>
      <Switch>
        <PrivateRoute exact path='/home' component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Redirect from='*' to='/home' />
      </Switch>
    </>
  )
}
