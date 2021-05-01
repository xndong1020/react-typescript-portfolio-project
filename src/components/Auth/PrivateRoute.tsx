import React, { ComponentType } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

interface PrivateRouteProps extends RouteProps {
  component: ComponentType<any>;
  exact?: boolean;
  path: string;
  props?: object;
}

export const PrivateRoute = ({
  component: Component,
  ...rest
}: PrivateRouteProps) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!localStorage.getItem("user")) {
          // not logged in so redirect to login page with the return url
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }

        // logged in so return component
        return <Component {...props} />;
      }}
    />
  );
};
