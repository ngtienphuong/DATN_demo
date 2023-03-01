import React from "react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import Api from "../../../component/api/Api";
import { ToastContainer, toast } from "react-toastify";


function ListProduct() {
    const [product, setProduct] = useState();
    const ChangeTrashProduct = (e, id) => {
        e.preventDefault()
        var data = JSON.stringify({
            "id": id
        });

        var config = {
            method: 'put',
            url: Api.ChangeTrashProduct,
            headers: {
                'Authorization': localStorage.accessToken,
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                toast(JSON.stringify(response.data.mes))
            })
            .catch(function (error) {
                console.log(error);
            });
        setTimeout(() => {
            window.location.reload()
        }, 1000)

    }
    const loadData = () => {
        axios.get(Api.Product)
            .then(res => setProduct(res.data.productData))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        loadData()
    }, [product?.length]);
    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <Link to='/admin/addProduct'><input type="button" value="Add" /></Link>
                <Link to='/admin/trashProduct'><input type="button" value="Trash" /></Link>
                {
                    (product?.length) ? (
                        <table className="admin-main border w-100">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Subcat</th>
                                    <th>Avaliable</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Expiry</th>
                                    <th>Brand</th>
                                    <th>Description</th>
                                    <th>Act</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    product?.map(pro => {
                                        return (
                                            <tr key={pro.id}>
                                                <td>{pro.id}</td>
                                                <td>{pro.name}</td>
                                                <td>{pro.subcategoryData.name}</td>
                                                <td>{pro.avaliable}</td>
                                                <td>
                                                    <img className="img-admin" src={pro.image} alt="" />
                                                </td>
                                                <td>{pro.price}</td>
                                                <td>{pro.expiry}</td>
                                                <td>{pro.brand}</td>
                                                <td>{pro.description}</td>
                                                <td>
                                                    <input onClick={e => ChangeTrashProduct(e, pro.id)} type="button" value="Xóa" />
                                                    <Link to={'/admin/editProduct/'+pro.id}>
                                                        <input type="button" value="Sửa" />
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    ) : null
                }
            </div>
            <ToastContainer />
        </div>
    )
}

export default ListProduct