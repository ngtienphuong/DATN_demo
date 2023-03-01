import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../common/Footer'
import Header from '../common/Header'
import ProductDetail from '../product/ProductDetail'

function ProductDetailPage() {
  var id = useParams()
  return (
    <div>
      <Header />
      <ProductDetail id={id.id} />
      <Footer />
    </div>
  )
}

export default ProductDetailPage