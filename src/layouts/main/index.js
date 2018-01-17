import React, { Component } from 'react'
import Navigation from '../../components/Navigation'
import Home from '../../components/Home'
import Skills from '../../components/Skills'
import Work from '../../components/Work'
import Footer from '../../components/Footer'
import Social from '../../components/Social'

import '../../css/skeleton.css'
import './App.css'


class AppLayout extends Component {

  render() {
    return (
        <div className="App">
          <Navigation />
          <div className="main-content">
            <Home />
            <Social />
            <Skills />
            <Work />
            <Footer />
          </div>

        </div>
    );
  }
}

export default AppLayout;
