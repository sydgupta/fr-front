import React from 'react';
import {renderToString} from 'react-dom/server';
// import Home from '../client/components/Home/Home.jsx';
import { StaticRouter } from 'react-router-dom';
import Routes from  '../client/Routes';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize  from 'serialize-javascript'

export default (req, store) => {
    const content = renderToString(
        <Provider store={store} >
            <StaticRouter location={req.path} context={{}}>
                <div className="route-list">{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );
    return `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.INITIAL_STATE = ${serialize(store.getState())};
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
}