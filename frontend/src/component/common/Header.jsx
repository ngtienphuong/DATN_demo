import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import Api from '../api/Api'

function Header() {
    const navigate = useNavigate()
    var hide = "d-none"
    var show = ""
    if (localStorage.accessToken) {
        hide = ''
        show = 'd-none'
    }
    else {
        hide = 'd-none'
        show = ''
    }
    const [category, setCategory] = useState([])
    const [subcategory, setSubcategory] = useState([])
    const loadData = () => {
        axios.get(Api.Category)
            .then(res => setCategory(res.data.categoryData))
            .catch(err => console.log(err))
        axios.get(Api.SubCategory)
            .then(res => setSubcategory(res.data.subcategoryData))
            .catch(err => console.log(err))
    }
    const Logout = () => {
        localStorage.removeItem('accessToken');
        navigate('/')
    }
    useEffect(() => {
        loadData()
    }, [])
    return (
        <div className='header'>
            <nav id='nav' className="navbar-expand-sm navbar-dark sticky-top">
                <div className="container">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto">
                            {/* <li className="nav-item">
                                <div className="category">
                                    <div className="cat">
                                        <i className='fa fa-align-justify'></i><span className='p-2'>Danh mục sản phẩm</span>
                                    </div>
                                    <div className="cat-content" id='menu'>
                                        <ul className='p-0'>
                                            {
                                                category.map((cat) => {
                                                    return (
                                                        <details className='py-1' key={cat.id}>
                                                            <summary>{cat.name}</summary>
                                                            <ul>
                                                                {
                                                                    subcategory.map((sub) => {
                                                                        if (sub.category == cat.id)
                                                                            return <li key={sub.id} className='py-1'><Link className='product' to={'/proSubCat/' + sub.id}>{sub.name}</Link></li>
                                                                    })
                                                                }
                                                            </ul>
                                                        </details>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </li> */}
                            <li className="nav-item active">
                                <Link to='/' className="nav-link text-white" >Trang chủ</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/account' className={"nav-link text-white " + hide}>Tài khoản</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/introduce' className="nav-link text-white" >Giới thiệu</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/cart' className="nav-link text-white ">Giỏ hàng</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/register' className={"nav-link text-white " + show}>Đăng ký</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/login' className={"nav-link text-white " + show}>Đăng nhập</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/' onClick={Logout} className={"nav-link text-white " + hide} >Đăng xuất</Link>
                            </li>
                        </ul>
                        <div className="navbar-nav search">
                                <input className="input-search" type="text" placeholder="Tìm kiếm" />
                                <button className='btnSearch'><i className='fa fa-search'></i></button>
                        </div>
                    </div>
                </div>
            </nav>
            <ToastContainer />
        </div>
    )
}
export default Header