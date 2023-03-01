import React, { Component } from 'react'
import Pay from '../cart/Pay'
import Footer from '../common/Footer'
import Header from '../common/Header'

export class PayPage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Pay/>
        <Footer/>
      </div>
    )
  }
}

export default PayPage