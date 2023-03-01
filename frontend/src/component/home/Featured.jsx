import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Api from '../api/Api'
import { AddToCart } from '../cart/activiteCart'
import { ToastContainer } from 'react-toastify'

function Featured() {
    const navigate = useNavigate()
    const format = Intl.NumberFormat('en')
    const [products, setProduct] = useState([])
    const loadData = () => {
        axios.get(Api.Product)
            .then((res) => { setProduct(res.data.productData) })
            .catch(err => { console.log(err) })
    }
    const checkUser = (e, id) => {
        if(!localStorage.accessToken)
        navigate('/login')
        AddToCart(e, id)
    }
    useEffect(() => {
        loadData()
    }, [])

    return (
        <div className="row">
            {
                !products ? (<div className='null'>Không có sản phẩm</div>) :
                    products.slice(0, 10).map(product => (
                        <div className="product-home" key={product.id}>
                            <Link className='product' to={'/detail/' + product.id}>
                                <img className="img-thumbnail" src={product.image} alt='' />
                                <div id='namepro' className='my-auto'>{product.name}</div>
                                <div className='mb-1'>{format.format(product.price)}đ</div>
                            </Link>
                            <button onClick={e => {checkUser(e, product.id)}} className="btn">Chọn mua</button>
                        </div>
                    ))
            }
            <ToastContainer />
        </div>
    )
}
export default Featured