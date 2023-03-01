import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Api from '../api/Api'
import { ToastContainer, toast } from 'react-toastify'
import { GoogleLogin } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'

function LogIn() {
  const navigate = useNavigate();
  var user = {}
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const btnLogin = () => {
    var data = JSON.stringify({
      "email": email,
      "password": pass
    });
    var config = {
      method: 'post',
      url: Api.Login,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data
    };
    axios(config)
      .then(res => {
        user = res.data
        if (user.err) toast(user.mes)
        else {
          localStorage.setItem('accessToken', user.accessToken);
          var check = {
            method: 'get',
            url: Api.User,
            headers: {
              Authorization: user.accessToken
            }
          }
          axios(check)
            .then(res => {
              toast('Logged in successfully')
              setTimeout(() => {

                (res.data.userData.roleData.code === 'R1') ? navigate('/admin') : navigate('/')
              }, 1000)


            })
            .catch(err => console.log(err))
        }
      })
      .catch(err => {
        console.log(err)
        toast(err.response.data.mes)
      });
  }
  return (
    <div className='container py-5 text-primary bg-white'>
      <div className='row px-5'>
        <h1 className='mb-3 text-center'>Đăng nhập</h1>
        <label>Email</label>
        <input className='mb-3' type="text" onChange={e => setEmail(e.target.value)} placeholder='Enter your email address' />
        <label>Mật khẩu</label>
        <input className='mb-3' type='password' onChange={e => setPass(e.target.value)} placeholder='Enter password' />
        <button type='submit' onClick={btnLogin} className='btn mb-3'>Đăng nhập</button>
        <div className="row login-button">
          <div className="button">
            <GoogleLogin
              onSuccess={credentialsResponse => {
                console.log(credentialsResponse)
                console.log(jwtDecode(credentialsResponse.credential))
              }}
            />
          </div>
        </div>

        <Link className='text-center' to='/register'>Đăng ký</Link>
      </div>
      <ToastContainer />
    </div>
  )
}
export default LogIn