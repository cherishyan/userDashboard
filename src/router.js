import React from 'react';
import { Router, Route,Switch,Redirect,routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic';

import IndexPage from './routes/IndexPage';
import Users from './routes/Users';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <switch>
        <Route exact path="/" component={Users} />
        <Route exact path="/users" component={Users} />
      </switch>
    </Router>
  );
}

export default RouterConfig;
