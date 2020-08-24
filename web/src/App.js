import React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import Routes from './routes';

import GlobalStyle from './styles/global';

import store from './store';
import history from './services/history';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}
