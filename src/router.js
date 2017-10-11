import React from "react";
import { Switch, Route, HashRouter} from "react-router-dom";

import Store from './components/Store/Store';
import Details from './components/Details/Details';
import Checkout from './components/Checkout/Checkout';

export default (
  <Switch>
    <Route component={ Store } path="/" exact />
    <Route component={ Details } path="/details/:id" /> 
    <Route component={ Checkout } path="/checkout" />
  </Switch>
)