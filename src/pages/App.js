import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'

import Header from './Header'
import Navigation from './Navigation'
import Pages from './Pages'
import Footer from './Footer'

import img1 from '../images/header1.jpg'
import img2 from '../images/header2.jpg'
import img3 from '../images/header3.jpg'


class App extends Component {

  data = [

    {
      id: 0,
      path: "/",
      image: img1,
      name: "START",
      component: "Home"
    },
    {
      id: 1,
      path: "/products",
      image: img2,
      name: "PRODUKTY",
      component: "Products"
    },
    {
      id: 2,
      path: "/contact",
      image: img3,
      name: "KONTAKT",
      component: "Contact"
    },
    {
      id: 3,
      path: "/login",
      image: img1,
      name: "ADMIN",
      component: "Admin"
    },
  ]

  state = {

    permission: false
  }

  changePermission = () => (this.setState({ permission: true }), console.log("dziala"))






  render() {

    return (

      <Router>
        <div className="wrap">
          <Header data={[...this.data]} />
          <section>
            <Navigation data={[...this.data]} />
            <Pages changePermission={this.changePermission.bind(this)} permission={this.state.permission} data={this.props} />
          </section>
          <Route component={Footer} />
        </div>
      </Router>
    )

  }
}

export default App