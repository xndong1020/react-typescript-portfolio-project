import ReduxThunk from "redux-thunk";
import * as Sentry from "@sentry/react";

import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { authReducer } from "../_reducers/authReducer";

const rootReducer = combineReducers({ auth: authReducer });

export type RootState = ReturnType<typeof rootReducer>;

const composeEnhancers =
  (process.env.REACT_APP_DEPLOYMENT_STATE !== "production" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()) ||
  compose;

const sentryReduxEnhancer = Sentry.createReduxEnhancer({
  // Optionally pass options
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk), sentryReduxEnhancer)
);
