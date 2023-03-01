import React from 'react'
import Api from '../component/api/Api'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from '../component/page/HomePage'
import LogInPage from '../component/page/LogInPage'
import RegisterPage from '../component/page/RegisterPage'
import AccountPage from '../component/page/AccountPage'
import CartPage from '../component/page/CartPage'
import IntroducePage from '../component/page/IntroducePage'
import ProductDetailPage from '../component/page/ProductDetailPage'
import ProductCategoryPage from '../component/page/ProductCategoryPage'
import ProductSearchPage from '../component/page/ProductSearchPage'
import NotFound from '../component/page/NotFoundPage'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import PayPage from '../component/page/PayPage'


function AppRoute() {
    // const navigate = useNavigate()

    // if (localStorage.accessToken) {
    //     var config = {
    //         method: 'get',
    //         url: Api.User,
    //         headers: {
    //             Authorization: localStorage.accessToken
    //         }
    //     }
    //     axios(config)
    //         .then(res => res.data.userData.roleData.code === 'R3' ? navigate('/') : navigate('/admin'))
    //         .catch(err => toast(err.response.data.mes))
    // }
    return (
        <HelmetProvider>
            <Helmet>
                <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="style.css" />
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </Helmet>
            <Routes>
                <Route path="/*" element={<HomePage />}></Route>
                <Route path="/login" element={<LogInPage />}></Route>
                <Route path="/register" element={<RegisterPage />}></Route>
                <Route path="/account" element={<AccountPage />}></Route>
                <Route path="/cart" element={<CartPage />}></Route>
                <Route path="/introduce" element={<IntroducePage />}></Route>
                <Route path="/detail/:id" element={<ProductDetailPage />}></Route>
                <Route path="/proSubCat/:id" element={<ProductCategoryPage />}></Route>
                <Route path="/proSearch/:name" element={<ProductSearchPage />}></Route>
                <Route path="/pay" element={<PayPage />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <Helmet>
                {/* <!-- Minified CSS and JS --> */}

                {/* <script src="assets/js/bootstrap.min.js"></script>
                <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'/>

            <script src="assets/js/bootstrap.bundle.min.js"></script> */}
            </Helmet>
        </HelmetProvider>

    )
}

export default AppRoute