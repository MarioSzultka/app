import React, { Fragment, Component } from 'react'
import { Redirect, Switch, Route, Prompt } from 'react-router-dom'

import Logged from './Logged'

class Admin extends Component {

  state = {

    login: false,
    pass: false,
    btnTitle: false

  }


  per = this.props.permission
  change = this.props.changePermission

  render() {

    const styles = {
      on: { color: "red", fontSize: "24px" },
      off: { color: "blue", fontSize: "24px" }
    }


    return (

      <Switch>

        {/* <Redirect to="/products" /> */}

        <Route path="/login" render={() => this.per ? <Redirect to="/logged" /> :

          <>
            <label>Login <input value={this.state.login} onChange={e => this.setState({ login: e.target.value })} type="text" /></label>
            <label>Pass <input value={this.state.pass} onChange={e => this.setState({ pass: e.target.value })} type="password" /></label>
            <button onClick={

              () => {
                if (this.state.login) { this.change() }

              }

            } type="submit">WYSLIJ</button>

            <button style={this.state.btnTitle ? styles.on : styles.off} onClick={() => this.setState({ btnTitle: !this.state.btnTitle })} type="reset">{this.state.btnTitle ? 'Wylacz' : "Wlacz"}</button>
          </>

        } />

      </Switch>

    )

  }

}
export default Admin

// 