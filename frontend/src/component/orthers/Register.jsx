import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { validName, validEmail, validPassword, validPhone } from '../../validation/Validation'
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [CPass, setCPass] = useState();
    const RegisterSubmit = () => {
        if (!name || !phone || !email || !pass || !CPass)
            toast.error("Vui lòng nhập đủ thông tin", {
                position: toast.POSITION.TOP_CENTER,
                className: 'toast-message'
            })
        else {
            if (pass !== CPass)
                toast.error("Mật khẩu và xác thực mật khẩu không giống nhau", {
                    position: toast.POSITION.TOP_CENTER,
                    className: 'toast-message'
                })
            if (!validName.test(name))
                toast.error("Họ tên không hợp lệ", {
                    position: toast.POSITION.TOP_CENTER,
                    className: 'toast-message'
                })
            if (!validEmail.test(email))
                toast.error("Email không hợp lệ", {
                    position: toast.POSITION.TOP_CENTER,
                    className: 'toast-message'
                })
            if (!validPhone.test(phone))
                toast.error("Số điện thoại không hợp lệ", {
                    position: toast.POSITION.TOP_CENTER,
                    className: 'toast-message'
                })
            if (!validPassword.test(pass))
                toast.error("Mật khẩu ít nhất có 6 kí tự và phải có chữ hoa, chữ thường và số", {
                    position: toast.POSITION.TOP_CENTER,
                    className: 'toast-message'
                })
        }

    }
    return (
        <div className='container py-5 text-primary bg-white'>
            <div className='row px-5'>
                <h1 className='mb-3 text-center'>Đăng ký</h1>
                <label>Họ tên</label>
                <input className='mb-3' onChange={e => setName(e.target.value)} type="text" placeholder='Enter your name' />
                <label>Số điện thoại</label>
                <input className='mb-3' onChange={e => setPhone(e.target.value)} type="tel" placeholder='Enter your phone' />
                <label>Email</label>
                <input className='mb-3' onChange={e => setEmail(e.target.value)} type="email" placeholder='Enter your email address' />
                <label>Địa chỉ</label>
                <input className='mb-3'  type='text' placeholder='Enter your address' />
                <label>Mật khẩu</label>
                <input className='mb-3' onChange={e => setPass(e.target.value)} type='password' placeholder='Enter password' />
                <label>Xác thực mật khẩu</label>
                <input className='mb-3' onChange={e => setCPass(e.target.value)} type='password' placeholder='Confirm password' />
                <button type='submit' onClick={RegisterSubmit} className='btn py-2 mb-3' >Đăng ký</button>
                <Link className='text-center' to='/login'>Đăng nhập</Link>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Register