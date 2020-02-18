import React, { Fragment } from 'react'
import { Route, Link } from "react-router-dom"


const Product = (props) => {

  const index = props.location.pathname.lastIndexOf("/")
  const pathName = props.location.pathname.substr(0, index)

  return (
    <>
      <h2>PRODUCT</h2>
      <p>{props.match.params.id}</p>
      <Link to={pathName} >Powrót do Storny Produkty</Link>
      {console.log(pathName)}
    </>
  )

}

export default Product