import React from 'react'
import { Route } from "react-router-dom"

const Image = (props) => {

  const pathname = props.location.location.pathname;

  let img = ""

  props.data.map(item => {

    if (item.path === pathname) {

      let index = props.data.indexOf(item);
      img = <header><img src={props.data[index].image} alt="fotka" /></header>
      return img;
    } else {

      return img = <header><img src={props.data[0].image} alt="fotka" /></header>
    }
  })



  return (

    img

  )
}

const Header = ({ data }) => {


  return (

    <Route render={props => <Image data={data} location={props} />} />


  )
}


export default Header