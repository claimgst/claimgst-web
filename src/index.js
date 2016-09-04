import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import routes from './config/routes';
import { signInUserSuccess } from './actions/authAction';

let token = localStorage.getItem('token');
if (token !== null) {
  store.dispatch(signInUserSuccess(token));
}

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
);