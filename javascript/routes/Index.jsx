import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import NewTextMessage from "../components/NewTextMessage";


export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/textmessages" exact component = {NewTextMessage} />
      <Route path="/textmessages" exact component = {NewTextMessage} />
    </Switch>
  </Router>
);