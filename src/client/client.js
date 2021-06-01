// Startup File for Client Side

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home.jsx';

ReactDOM.hydrate(<Home />, document.querySelector('#root'))