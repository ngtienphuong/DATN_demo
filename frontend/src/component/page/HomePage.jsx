import React, { Component } from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Logo from '../common/Logo'
import Featured from '../home/Featured'
import Newarrial from '../home/Newarrial'

export class HomePage extends Component {
  render() {
    return (
      <div>
        {/* <Logo /> */}
        <Header />
        <div className='container'>
          <Featured />
        </div>
        <Footer />
      </div>
    )
  }
}

export default HomePage