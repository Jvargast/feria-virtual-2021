import {BrowserRouter, Switch, Route}  from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Homepage}></Route>
        <Route path='/login' component={Login}></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;