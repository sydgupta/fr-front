import express from 'express';
import renderer from './helpers/renderer';
const app = express();
const port = 3000;
import createStore from './helpers/createStore';

app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore();
    res.send(renderer(req, store));
})

app.listen(port, () => {
    console.log('Listen on Port 3000');
})