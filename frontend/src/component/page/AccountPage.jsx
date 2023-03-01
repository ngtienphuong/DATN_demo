import React, { Component } from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Account from '../orthers/Account'

export class AccountPage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Account/>
        <Footer/>
      </div>
    )
  }
}

export default AccountPage