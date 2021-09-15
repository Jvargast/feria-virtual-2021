import React, { Fragment } from 'react'
import { Route, useRouteMatch, Redirect } from 'react-router-dom'
import Homepage from '../../Pages/Login';
import Register from '../../Pages/Register';

export default function Auth() {

    const match = useRouteMatch();

    console.log(`${match.url}/login`);

    return (
        <Fragment>

             <Route exact path={`${match.url}/login`}>
                <Homepage />
            </Route>
            <Route exact path={`${match.path}/register`}>
                <Register />
            </Route>
            <Route path={`${match.path}`}>
                <Redirect to="/auth/register"/>

            </Route>
        </Fragment>
            
        
    )
}
