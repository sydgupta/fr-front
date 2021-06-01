import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import Home from './client/components/Home/Home.jsx';
const app = express();
const port = 3000;
app.use(express.static('public'));

app.get('/', (req, res) => {
    const content = renderToString(<Home />);
    const html = `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
    res.send(html);
})

app.listen(port, () => {
    console.log('Listen on Port 3000');
})