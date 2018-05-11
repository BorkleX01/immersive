import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router
}
from 'react-g-analytics';
import {
    applyMiddleware, createStore
}
from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../shared/reducers/index';

import App from '../shared/App';
import {
    Provider
}
from 'react-redux';
import './styles/index.css'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

var deviceAgent = navigator.userAgent.toLowerCase();
var ipad = deviceAgent.match(/(ipad)/);
if (ipad) {
    document.body.className += ' ipad';
}

ReactDOM.render( <Provider store = {store}>
                  <Router id = "UA-101266782-9">
                    <div id = "outer-container">
                      <App />
                    </div>
                    </Router>
                 </Provider>,
    document.getElementById('root')
);
