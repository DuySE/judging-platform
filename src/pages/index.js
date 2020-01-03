import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Redirect to="/" />
    </Switch>
)

export default Routes;
