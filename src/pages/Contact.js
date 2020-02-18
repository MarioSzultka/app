import React, { Fragment, Component } from 'react'
import { Prompt } from 'react-router-dom'

class Contact extends Component {

  state = {

    textarea: "",
    checkIn: !false


  }

  render() {
    return (

      <form onClick={(e) => e.preventDefault()}>

        <label style={{ display: "block" }}>Imie <input placeholder="Podaj Imie" type="text"></input> </label>
        <textarea onChange={(e) => {

          if (this.state.textarea.length > 3) this.setState({ textarea: e.target.value, checkIn: !true })
          else this.setState({ textarea: e.target.value })

        }} value={this.state.textarea} name="" id="" cols="30" rows="10"></textarea>
        <button style={{ display: "block" }} type="submit">WYSLIJ</button>
        <Prompt

          when={this.state.checkIn}
          message="Masz nie wypełniony formularz czy na pewno chcesz wyjść?"

        />
      </form>
    )

  }
}

export default Contact