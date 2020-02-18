import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = ({ data }) => {

  const menuList = data.map(item => <li key={item.id} style={{ listStyle: "none" }}><NavLink to={item.path}>{item.name}</NavLink></li>)

  return (
    <nav style={{ border: "2px solid black" }}>
      <ul>
        {menuList}
      </ul>
    </nav>

  )

}

export default Navigation