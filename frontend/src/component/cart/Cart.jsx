import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Api from '../api/Api';
import axios from 'axios'
import { DeleteCart, DeleteAllCart } from './activiteCart';
import { toast, ToastContainer } from 'react-toastify';


function Cart() {
  const navigate = useNavigate()
  var totalPrice = 0;
  const format = Intl.NumberFormat('en')
  const [carts, setCart] = useState();
  const loadData = () => {
    var config = {
      method: 'get',
      url: Api.Cart,
      headers: {
        'Authorization': localStorage.accessToken
      }
    };

    axios(config)
      .then(res => setCart(res.data.cartData))
      .catch(err => console.error(err));
  }
  const ChangeQuantity = (e, id, act) => {
    e.preventDefault()

    var config = {
      method: 'put',
      url: Api.ChangeQuantityCart,
      headers: {
        'Authorization': localStorage.accessToken,
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({
        "id": id,
        "act": act
      })
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  useEffect(() => {
    loadData();
    if(!localStorage.accessToken) navigate('/login')
  }, [carts]);
  return (
    <div className="container bg-white py-3 cart">
      {
        (!carts?.length) ?
          (
            <div className='d-flex justify-content-center py-5'>
              <img src="assets/image/cartnull.png" alt="Cart null" />
            </div>
          ) :
          (
            <div className='mx-3'>
              <h2 className='text-center'>Giỏ hàng</h2>
              <table id='table' className='border w-100 px-3'>
                <thead className='border'>
                  <tr className='text-center'>
                    <th className='border'>Hình ảnh</th>
                    <th className='border'>Tên sản phẩm</th>
                    <th className='border'>Số lượng</th>
                    <th className='border'>Giá</th>
                    <th className='border'>Thành tiền</th>
                    <th className='border'>Xóa</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    carts?.map(cart => {
                      totalPrice += cart.quantity * cart.unitPrice
                      return (
                        <tr className='border' key={cart.id}>
                          <td className='border'><img className='imgCart' src={cart.image} alt="" /></td>
                          <td className='border'>{cart.productName}</td>
                          <td className='border text-center'><i onClick={e => ChangeQuantity(e, cart.id, 0)} className='fas fa-angle-left border mx-3 px-2' />{cart.quantity}<i onClick={e => ChangeQuantity(e, cart.id, 1)} className='fas fa-angle-right border mx-3 px-2' /></td>
                          <td className='border text-end'>{format.format(cart.unitPrice)} đ</td>
                          <td className='border text-end'>{format.format(cart.quantity * cart.unitPrice)} đ</td>
                          <td className='deleteCart text-center' onClick={e => { DeleteCart(e, cart.id) }}><i className="fa fa-trash-alt"> Xóa</i></td>
                        </tr>
                      )
                    })

                  }
                </tbody>
                <tfoot>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Tổng tiền: </td>
                    <td>{format.format(totalPrice)} đ</td>
                    {
                      (carts?.length > 1) ? (<td className='deleteCart' onClick={e => DeleteAllCart(e)}><i className="fa fa-trash-alt"> Xóa tất cả</i></td>) : null
                    }
                  </tr>
                </tfoot>
              </table>
              <Link className='product' to='/pay'>
                <input className='btnThanhtoan' type="button" value="Thanh toán" />
              </Link>

            </div>
          )
      }
      <ToastContainer/>
    </div>
  )
}

export default Cart