import { Route, Link, Switch } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./components/Home";
import AddEvent from "./components/AddEvent";
import EditEvent from "./components/EditEvent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Team from "./components/Team";
import UpcomingEvents from "./components/UpcomingEvents";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route />
        <Route path="/editevent" component={EditEvent} />
        <Route path="/addevent" component={AddEvent} />
        <Route path="/team" component={Team} />
        <Route path="/upcomingevents" component={UpcomingEvents} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
