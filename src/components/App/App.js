/* eslint-disable linebreak-style */
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import FAQ from '../FAQ/FAQ.js';
import MainLayout from '../MainLayout/MainLayout.js'

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/faq' component={FAQ} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;