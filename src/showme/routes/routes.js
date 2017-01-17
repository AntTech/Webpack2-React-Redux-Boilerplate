import React from 'react';
import { Route, browserHistory } from 'react-router';
import Helmet from 'react-helmet';
import App from '../containers/App';


export default (
    <Route path="/" history={browserHistory} component={App}>
    </Route>
);
