import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppImmersive from './App';
import AppHorizontal from './frankensource/shared/App.js'
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-g-analytics';
// import {BrowserRouter as Router} from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware 	from 'redux-thunk'
import { Provider } from 'react-redux'

import rootReducer from './reducers/site-store.js'

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))
ReactDOM.render(
    <Provider store = {store}>
      <Router id="UA-101266782-9">
          <AppImmersive />
      </Router>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
