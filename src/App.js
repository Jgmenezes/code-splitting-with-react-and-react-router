import React, { Fragment, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './components/Menu';
const FirstComponent = lazy(() => import('./components/FirstComponent'));
const SecondComponent = lazy(() => import('./components/SecondComponent'));
const ThirdComponent = lazy(() => import('./components/ThirdComponent'));
const FourthComponent = lazy(() => import('./components/FourthComponent'));

function App() {
  return (
    <Fragment>
      <Router>
        <Menu />
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/" component={FirstComponent} />
            <Route path="/second" component={SecondComponent} />
            <Route path="/third" component={ThirdComponent} />
            <Route path="/fourth" component={FourthComponent} />
          </Suspense>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
