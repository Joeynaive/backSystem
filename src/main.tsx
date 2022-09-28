import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import APP from '@/login';

Sentry.init({
  dsn: 'https://95eff52646794270966f323bbb8b31e7@o1271567.ingest.sentry.io/6463996',
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  // <HistoryRouter history={history}>
  <APP/>,
  // </HistoryRouter>,
  document.getElementById('root')
);
