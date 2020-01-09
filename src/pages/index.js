import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ProblemsetPage from './ProblemsetPage';
import ProblemPage from './ProblemPage';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/problemset" component={ProblemsetPage} />
        <Route exact path="/problem/:id" component={ProblemPage} />
        <Redirect to="/" />
    </Switch>
)

export default Routes;
