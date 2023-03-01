import React, { Component } from 'react'
import logo from './logo.jpg'

export class Logo extends Component {
  render() {
    return (
      <div className='container'>
        <div>
        <img src={logo} alt="" height={200} width={180}/>
        <img src="https://cdn.tgdd.vn/bachhoaxanh/banners/5562/nuoc-ngot-giam-den-28-20102022161549.jpg" alt="" />
        </div>
      </div>
    )
  }
}

export default Logo