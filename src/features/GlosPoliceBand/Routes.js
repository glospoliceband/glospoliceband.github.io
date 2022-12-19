// External imports
import React from 'react';
import { HashRouter as Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';

// Internal imports
import Home from '../Home';
import Engagements from '../Engagements';
import Links from '../Links';
import CdInfo from '../CdInfo';
import Contacts from '../Contacts';
import Music from '../Music';
import Documents from '../Documents';
import LoginForm from '../LoginForm';

export const Routes = ({className}) => (
    <Switch>
        <Route exact path="/home"><Home className={className} /></Route>
        <Route exact path="/engagements"><Engagements className={className} /></Route>
        <Route exact path="/links"><Links className={className} /></Route>
        <Route exact path="/cdinfo"><CdInfo className={className} /></Route>
        <Route exact path="/contacts"><Contacts className={className} /></Route>
        <Route exact path="/music"><LoginForm><Music className={className} /></LoginForm></Route>
        <Route exact path="/Documents"><LoginForm><Documents className={className} /></LoginForm></Route>
        <Route exact path="/"><Home className={className} /></Route>
    </Switch>
);
