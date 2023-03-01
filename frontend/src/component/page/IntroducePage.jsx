import React, { Component } from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Introduce from '../orthers/Introduce'

export class IntroducePage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Introduce/>
        <Footer/>
      </div>
    )
  }
}

export default IntroducePage