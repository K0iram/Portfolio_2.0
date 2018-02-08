import React from 'react';
import Router from 'react-router-dom/HashRouter'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'



import AppLayout from './layouts/main'
import Home from './components/Home'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Blog from './components/Blog'
import Admin from './components/Admin'


const Routes = () => (
  <Router>
    <AppLayout>
    	<Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </AppLayout>
  </Router>
)

export default Routes
