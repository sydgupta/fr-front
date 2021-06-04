import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
const app = express();
const port = 3000;
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';

app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore();

    console.log(matchRoutes(Routes, req.path));
    const promises = matchRoutes(Routes, req.path).map(route => {
        return route.route.loadData ? route.route.loadData(store) : null;
    })

    Promise.all(promises).then(()=>{
        res.send(renderer(req, store));
    });
})

app.listen(port, () => {
    console.log('Listen on Port 3000');
})