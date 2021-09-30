import React, { Fragment } from 'react'
import { Route, useRouteMatch, Redirect } from 'react-router-dom'
import ForgotPassword from '../../Pages/ForgotPassword';
import Login from '../../Pages/Login';
import Register from '../../Pages/Register';

export default function Auth() {

    const match = useRouteMatch();

    console.log(match);

    return (
        <Fragment>

             <Route exact path={`${match.path}/login`}>
                <Login />
            </Route>
            <Route exact path={`${match.path}/register`}>
                <Register />
            </Route>
            <Route exact path={`${match.path}/passwordReset`}>
                <ForgotPassword/>
            </Route>
            <Route path={`${match.path}`}>
                <Redirect to="/auth/login"/>

            </Route>
        </Fragment>
            
        
    )
}
