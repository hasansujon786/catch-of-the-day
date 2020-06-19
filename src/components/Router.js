import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import StoreKeeper from './StoreKeeper';
import App from './App';
import NotFound from './NotFound';


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={StoreKeeper} />
      <Route exact path='/store/:storeId' component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
