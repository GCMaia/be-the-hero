import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import logon from './pages/logon';
import register from './pages/register';
import profile from './pages/profile';
import newIncident from './pages/newIncident';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={logon} />
                <Route path="/register" component={register} />
                <Route path="/profile" component={profile} />
                <Route path="/incidents/new" component={newIncident} />
            </Switch>
        </BrowserRouter>
    )
}