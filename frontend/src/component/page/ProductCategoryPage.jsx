import React, { Component } from 'react'
import Header from '../common/Header';
import Footer from '../common/Footer';
import { useParams } from 'react-router-dom'
import ProductCategory from '../product/ProductCategory'

function ProductCategoryPage() {
  var id = useParams()
  return (
    <div>
      <Header />
      <div id='footer'>
        <ProductCategory id={id.id} />
      </div>
      <Footer />
    </div>
  )
}

export default ProductCategoryPage