import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './views/Logon';
import NewIncident from './views/NewIncident';
import Profile from './views/Profile';
import Register from './views/Register';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/incidents/new" component={NewIncident} />
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
