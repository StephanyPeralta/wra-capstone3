import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../Layout';
import HomePage from '../../pages/Home';
import ArchivePage from '../../pages/Archive';
import NotFound from '../../pages/NotFound';
import PrivateRoute from '../PrivateRoute';

function Router() {
  return (
    <Layout>
      <Switch>
        <PrivateRoute exact path="/archive">
          <ArchivePage />
        </PrivateRoute>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default Router;
