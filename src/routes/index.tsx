import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  About,
  Dashboard
} from './../pages'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/about" exact component={About} />
    </Switch>
  )
}
