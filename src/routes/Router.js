import Header from 'components/header/Header';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {routes.map((r) => (
          <Route
            path={r.path}
            exact
            component={r.components}
            key={Math.random()}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
