import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './usersReducer'
import { Provider } from 'react-redux';


// const store = createStore(usersReducer, applyMiddleware(thunk)) 

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  usersReducer,
  composeEnhancer(applyMiddleware(thunk)),
);



ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);


// import thunk from 'redux-thunk';
