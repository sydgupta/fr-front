// Startup File for Client Side

import React from 'react';
import ReactDOM from 'react-dom';
// import Home from './components/Home/Home.jsx';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Routes from './Routes';
import reducers from './store/reducers/index';

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
   <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
document.querySelector('#root'))