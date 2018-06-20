import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import IndexPage from './routes/indexpage/IndexPage';
import Login from './routes/login/Login';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/login" />} />
        <Route path="/index" exact component={IndexPage} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
};

export default RouterConfig;
