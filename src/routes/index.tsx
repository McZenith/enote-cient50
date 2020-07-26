import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import n from './index.scss';

const IndexRouter: React.SFC = (): JSX.Element => {
  return (
    <div className={n.main}>
      <Router>
        <div>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default IndexRouter;
