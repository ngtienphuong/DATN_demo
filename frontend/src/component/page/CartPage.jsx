import React, { Component } from 'react'
import Cart from '../cart/Cart'
import Footer from '../common/Footer'
import Header from '../common/Header'

export class CartPage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Cart/>
        <Footer/>
      </div>
    )
  }
}

export default CartPage