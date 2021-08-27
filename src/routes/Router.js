import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';

const Router = ({ Header, Footer }) => {
  return (
    <BrowserRouter>
      {Header && <Header />}
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
      {Footer && <Footer />}
    </BrowserRouter>
  );
};

export default Router;
