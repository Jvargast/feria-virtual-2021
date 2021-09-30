import { Fragment } from 'react';
import {BrowserRouter, Switch, Route}  from 'react-router-dom';
import Auth from './components/auth/Auth';
import ParkView from './components/protected/ParkView';
import ProtectedRoute from './components/protected/ProtectedRoute';


function App(): JSX.Element {
  return (
    <Fragment>

      <Route path="/auth">
        <Auth/>
      </Route>
      <ProtectedRoute exact path="/homepage" component={ParkView}/>
      
    </Fragment>
   
  );
}

export default App;