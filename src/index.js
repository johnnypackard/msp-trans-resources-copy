import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducer from './redux/reducers';
import App from './App';
import rootSaga from './redux/sagas';

// Queue-it test
<script type="text/javascript" src="//static.queue-it.net/script/queueclient.min.js"></script>
  <script 
    data-queueit-c="johnnytest" 
    type="text/javascript" 
    src="//static.queue-it.net/script/queueconfigloader.min.js">
</script>

// Initializing to an empty object, but here is where you could
// preload your redux state with initial values (from localStorage, perhaps)
const preloadedState = {};
const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(
  reducer,
  preloadedState,
  applyMiddleware(...middlewares),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);
