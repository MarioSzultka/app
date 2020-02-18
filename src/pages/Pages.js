import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../layouts/Home'
import Products from '../layouts/Products'
import Product from '../layouts/Product'
import Contact from './Contact'
import Admin from '../layouts/Admin'
import Logged from '../layouts/Logged'



const Pages = (props) => {

  return (
    <>
      < main >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:id" component={Product} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={() => <Admin changePermission={props.changePermission} permission={props.permission} />} />
          <Route path="/logged" component={Logged} />

        </Switch>
      </main >
    </>
  )

}

export default Pages