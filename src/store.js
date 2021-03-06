import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import localStorageMiddleware from './middleware/localStorageMiddleware'
import createLogger from 'redux-logger'
import reducers from './reducers';

// react-router-redux middleware
const reactRouterReduxMiddleware = routerMiddleware(browserHistory)

const createStoreWithMiddleware  = compose(
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    localStorageMiddleware,
    reactRouterReduxMiddleware,
    createLogger() // neat middleware that logs actions
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(
  reducers,
  createStoreWithMiddleware
);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('reducers', () => {
    const nextRootReducer = require('reducers').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store;