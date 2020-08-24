import React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

import Routes from './routes';

import './config/ReactotronConfig';
import GlobalStyle from './styles/global';

import store from './store';
import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
