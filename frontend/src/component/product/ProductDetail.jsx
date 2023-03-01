import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Api from '../api/Api'
// import { AddToCart } from '../cart/activiteCart'
import { store } from '../../store/store'
import { AddCart } from '../../store/action/cart'



function ProductDetail(props) {
  const format = Intl.NumberFormat('en')
  const [products, setProduct] = useState([]);
  const [similar, setSimilar] = useState([]);
  const loadData = () => {
    axios.get(Api.ProductDetail(props.id))
      .then(res => {
        setProduct(res.data.productData)
        setSimilar(res.data.similarData)
      })
      .catch(err => console.error(err));
  }
  const AddToCart = () => {
    store.dispatch(AddCart({ id: products.id, name: products.name, quantity: products.quantity, unit_price: products.price, image: products.image }))
    console.log(store.getState().cart.carts)
  }
  useEffect(() => {
    loadData()
  }, [props.id])
  return (
    <div className='container bg-white'>
      <div className="row mx-auto mb-3">
      <div className='col-sm-6'>
        <img className='imgdetail' src={products.image} alt="" />
      </div>
      <div className='col-sm-6'>
        <p className='mb-3 productname'>{products.name}</p>
        <div className='mb-2'>Hạn sử dụng: {products.expiry}</div>
        <h3 className='text-danger'>{format.format(products.price)}₫</h3>
        <button onClick={e => { AddToCart(e, products.id) }} className='mt-3 btn' >Chọn mua</button>
      </div>
      
      </div>
      <div>
        {
        (products?.description) ?
          (
            <>
              <p className='h5'>Thông tin sản phẩm</p>
              <p>{products.description}</p>
            </>
          ) : null
      }
      </div>
      <div className="row mx-auto my-3">
        <p className='h5'>Sản phẩm liên quan</p>
        {
          similar?.map(product => (
            <div className="col-sm-3 border pb-3 product-home" key={product.id}>
              <Link className='product' to={'/detail/' + product.id}>
                <img className="img-thumbnail" src={product.image} />
                <div id='namepro' className='my-auto'>{product.name}</div>
                <div className='mb-1'>{format.format(product.price)}đ</div>
              </Link>
              <button onClick={AddToCart} className="btn">Chọn mua</button>
            </div>
          ))
        }
      </div>
      
      <ToastContainer />
    </div>
  )
}
export default ProductDetail