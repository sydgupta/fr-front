import React from 'react';
import Home from './components/Home/Home.jsx';
import Users from './components/Users/Users.jsx';

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        ...Users,
        path: '/users',
    }
]