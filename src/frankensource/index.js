import React 							from 'react'
import ReactDOM 						from 'react-dom'
import { BrowserRouter } 				from 'react-g-analytics'
import { Route, Switch } 				from 'react-router-dom'
import thunkMiddleware 					from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } 					from 'react-redux'
import rootReducer 						from './reducers'
import App 								from './containers/app'
import Home 							from './containers/home'
import registerServiceWorker 			from './registerServiceWorker'
import './bootstrap.css';
import './App.css';

// Create Redux store
const store = createStore(
	rootReducer,
	applyMiddleware(
		thunkMiddleware
	)
)
console.log("=====> start");
// Render App
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter id="UA-101266782-5">
			<Switch>
				<Route path="/home" component={Home}/>
				<Route path="/:slug" component={App}/>
				<Route component={Home}/>
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

// Register service worker
registerServiceWorker();
