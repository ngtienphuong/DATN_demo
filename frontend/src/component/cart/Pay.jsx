import React, { useEffect, useState } from 'react'
import Api from '../api/Api';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { DeleteAllCart } from './activiteCart';

function Pay() {
  const navigate = useNavigate()
  var totalPrice = 0;
  const format = Intl.NumberFormat('en')
  const [user, setUser] = useState();
  const [carts, setCart] = useState();
  const [address, setAddress] = useState();

  const AddOrder = () => {
    var data = JSON.stringify({
      "deliveryAddress": address,
      "totalPrice": totalPrice,
      "carts": carts
    });
    var config = {
      method: 'post',
      url: Api.Order,
      headers: {
        'Authorization': localStorage.accessToken,
        'Content-Type': 'application/json'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        toast(JSON.stringify(response.data.mes));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // const AddOrderDetail = () => {
  //   carts.map(item => {
  //     var data = JSON.stringify({
  //       "productID": item.productID,
  //       "quantity": item.quantity
  //     });

  //     var config = {
  //       method: 'post',
  //       url: Api.OrderDetail,
  //       headers: {
  //         'Authorization': localStorage.accessToken,
  //         'Content-Type': 'application/json'
  //       },
  //       data: data
  //     };

  //     axios(config)
  //       .then(function (response) {
  //         console.log(JSON.stringify(response.data));
  //         toast(JSON.stringify(response.data.mes));
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   })
  // }

  const Order = (e) => {
    AddOrder()
    // AddOrderDetail()
    DeleteAllCart(e)
    setTimeout(() => { navigate('/') }, 2000)
  }
  const loadData = () => {
    axios({
      method: 'get',
      url: Api.User,
      headers: {
        Authorization: localStorage.accessToken
      }
    })
      .then(res => setUser(res.data.userData))
      .catch(err => console.log(err))
    axios({
      method: 'get',
      url: Api.Cart,
      headers: {
        'Authorization': localStorage.accessToken
      }
    })
      .then(res => setCart(res.data.cartData))
      .catch(err => console.error(err));
  }
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="bg-white py-3 cart" id='footer'>
      <div className='mx-3'>
        <h2 className='text-center'>Thanh toán</h2>
        <h5>Thông tin khách hàng</h5>
        <table className='m-3'>
          <tbody>
            <tr>
              <th>Họ và tên</th>
              <td>{user?.name}</td>
            </tr>
            <tr>
              <th>Số điện thoại</th>
              <td>0366017402</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{user?.email}</td>
            </tr>
            <tr>
              <th>Địa chỉ</th>
              <td>
                {/* <input onChange={e => setAddress(e.target.value)} type="text" /> */}
                224/10 Ung Văn Khiêm phường 25 quận Bình Thạnh
              </td>
            </tr>
          </tbody>
        </table>
        <h5>Sản phẩm</h5>
        <table id='table' className='border w-100 px-3'>
          <thead className='border'>
            <tr className='text-center'>
              <th className='border'>Hình ảnh</th>
              <th className='border'>Tên sản phẩm</th>
              <th className='border'>Số lượng</th>
              <th className='border'>Giá</th>
              <th className='border'>Thành tiền</th>
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
                    <td className='border text-center'>{cart.quantity}</td>
                    <td className='border text-end'>{format.format(cart.unitPrice)} đ</td>
                    <td className='border text-end'>{format.format(cart.quantity * cart.unitPrice)} đ</td>
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
            </tr>
          </tfoot>
          
        </table>
        <input onClick={e => Order(e)} className='btnThanhtoan' type="button" value="Đặt hàng" />
      </div>
      <ToastContainer />
    </div>
  )
}

export default Pay 