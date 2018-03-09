import React, { Component } from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

import '../../css/skeleton.css'
import './App.css'


class AppLayout extends Component {

  renderChildren() {
      const childrenWithProps = React.Children.map(this.props.children,
       (child) => React.cloneElement(child, {
         notify: this.showNotification
       })
      )

      return childrenWithProps
    }


    render() {
      return (
        <div className="App">
          <Navigation />
          <div className="main-content">
            { this.renderChildren() }
          </div>
          <Footer />
        </div>
      );
    }
  }

export default AppLayout;