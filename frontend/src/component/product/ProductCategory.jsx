import axios from 'axios'
import React, { Component } from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Api from '../api/Api'
import { AddToCart } from '../cart/activiteCart'


function ProductCategory(props) {
  const format = Intl.NumberFormat('en')

  const [products, setProduct] = useState([])
  const loadData = () => {
    axios.get(Api.ProductCategory(props.id))
      .then((res) => { setProduct(res.data.productData) })
      .catch(err => { console.log(err) })
  }
  console.log(products)
  useEffect(() => {
    loadData();
  }, [props.id])
  return (
    <div className="row">
      {
        products?.map(product => (
          <div className="col-sm-3 border pb-3 product-home" key={product.id}>
            <Link className='product' to={'/detail/' + product.id}>
              <img className="img-thumbnail" src={product.image} alt='' />
              <p id='namepro' className="my-auto">{product.name}</p>
              <p className="mb-0">{format.format(product.price)}đ</p>
            </Link>
            <button onClick={e => { AddToCart(e, product.id) }} className="btn">Add to cart</button>
          </div>
        ))
      }
    </div>
  )
}
export default ProductCategory
