import React from "react";
import { Router } from "react-router-dom";
import { render } from "react-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { Routes } from "./Routes";
import { store } from "./_store/configureStore";

const history = createBrowserHistory();

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_URL,
  integrations: [
    new Integrations.BrowserTracing({
      routingInstrumentation: Sentry.reactRouterV5Instrumentation(history),
    }),
  ],
  tracesSampleRate: 1.0,
});

render(
  <Router history={history}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </Router>,
  document.getElementById("root")
);
