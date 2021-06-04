// Startup File for Client Side
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import Home from './components/Home/Home.jsx';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Routes from './Routes';
import reducers from './store/reducers/index';
import { renderRoutes } from 'react-router-config';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, window.INITIAL_STATE, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.hydrate(
   <Provider store={store}>
        <BrowserRouter>
            <div className="route-list">{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>,
document.querySelector('#root'))