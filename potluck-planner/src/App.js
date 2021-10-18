import { Route, Link, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './components/Home';
import AddEvent from './components/AddEvent';
import EditEvent from './components/EditEvent';
import Footer from './components/Footer';
import Header from './components/Header';
import Team from './components/Team';
import UpcomingEvents from './components/UpcomingEvents';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';



function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/upcomingevents">
              <UpcomingEvents />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/add">
            <AddEvent />
          </Route>
          <Route path="/edit">
            <EditEvent />
          </Route>
        </Switch>
        <Footer />
        
    </div>
  );
}

export default App;
