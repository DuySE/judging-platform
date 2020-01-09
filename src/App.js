import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import './App.css';
import configStore from './stores';
import Routes from './pages';
import { createBrowserHistory } from 'history';
import 'bootstrap/dist/css/bootstrap.min.css';

const history = createBrowserHistory();

const { store } = configStore();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
