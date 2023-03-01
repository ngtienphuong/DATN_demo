import React, { Component } from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import LogIn from '../orthers/LogIn'

export class LogInPage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <LogIn />
        <Footer/>
      </div>
    )
  }
}

export default LogInPage