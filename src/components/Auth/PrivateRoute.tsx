import React, { ComponentType } from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { AnyObject } from 'yup/lib/object'

interface PrivateRouteProps extends RouteProps {
  // eslint-disable-next-line
  component: ComponentType<any>
  exact?: boolean
  path: string
  props?: AnyObject
}

export const PrivateRoute = ({
  component: Component,
  ...rest
}: PrivateRouteProps): JSX.Element => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!localStorage.getItem('user')) {
          // not logged in so redirect to login page with the return url
          return (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          )
        }

        // logged in so return component
        return <Component {...props} />
      }}
    />
  )
}
