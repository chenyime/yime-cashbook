import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Home, Create, AddRemark } from './scenes';

export const Routes = () => (
  <Router>
    <Switch>
      <Route strict path="/addremark" component={AddRemark}/>
      <Route strict path="/create" component={Create}/>
      <Route strict path="/" component={Home}/>
    </Switch>
  </Router>
)



