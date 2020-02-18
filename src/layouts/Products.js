import React, { Fragment, Component } from 'react'
import { Route, Link } from "react-router-dom"


class Products extends Component {

  state = {


  }

  render() {
    return (
      <>
        <h3>Zobacz Nasze Produkty</h3>
        <ul>
          <li><Link to="products/car">Samochody</Link></li>
          <li><Link to="products/bike">Rowery</Link></li>
          <li><Link to="products/boat">Łódź</Link></li>
        </ul>
      </>
    )
  }
}

export default Products