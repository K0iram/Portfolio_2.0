import React from 'react';
import Router from 'react-router-dom/BrowserRouter'
import Route from 'react-router-dom/Route'


import AppLayout from './layouts/main'
import Home from './components/Home'





const Routes = () => (
  <Router>
    <AppLayout>
        <Route path="/home" component={Home} />
    </AppLayout>
  </Router>
)

export default Routes
