import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import ProductSearch from '../product/ProductSearch'
import {useParams} from 'react-router-dom'

function ProductSearchPage() {
  var name= useParams()
  return (
    <div>
      <Header/>
      <ProductSearch name={name}/>
      <Footer/>
    </div>
  )
}

export default ProductSearchPage