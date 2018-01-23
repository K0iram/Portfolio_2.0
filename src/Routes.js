import React from 'react';
import Router from 'react-router-dom/BrowserRouter'
import Route from 'react-router-dom/Route'


import AppLayout from './layouts/main'
import Home from './components/Home'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import About from './components/About'


const Routes = () => (
  <Router>
    <AppLayout>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </AppLayout>
  </Router>
)

export default Routes
