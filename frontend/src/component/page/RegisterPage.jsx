import React, { Component } from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Register from '../orthers/Register'

export class RegisterPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Register />
        <Footer />
      </div>
    )
  }
}

export default RegisterPage