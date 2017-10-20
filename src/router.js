import React from 'react';
import {Router, Route, Switch, Redirect, routerRedux} from 'dva/router';
import dynamic from 'dva/dynamic';

import IndexPage from './routes/IndexPage';
import App from './routes/app/App';
// import Users from './routes/Users';
// import Login from './routes/login/Login';
// import DashboardPage from './routes/DashboardPage';

const {ConnectedRouter} = routerRedux;

export default function ({history, users}) {
  const IndexPage = dynamic({
    users,
    component: () => import('./routes/DashboardPage'),
  });
  const routes = [

    {
      path: '/login',
      models: () => import('./models/login'),
      component: () => import('./routes/login/Login'),
    },
    {
      path: '/users',
      models: () => import('./models/users'),
      component: () => import('./routes/Users'),
    },
    {
      path: '/dashboard',
      component: () => import('./routes/DashboardPage'),
    }
  ];

  return (

    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/dashboard"/>)}/>
          {
            routes.map(({path, ...dynamics}, key) => (
              <Route key={key}
                     exact
                     path={path}
                     component={dynamic({
                       users,
                       ...dynamics,
                     })}
              />
            ))
          }
        </Switch>
      </App>
    </ConnectedRouter>
  );
}

