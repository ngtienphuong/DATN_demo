import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../../component/api/Api";
import { ToastContainer, toast } from "react-toastify";

export default function TrashProduct() {
    const [product, setproduct] = useState();
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
                console.log(JSON.stringify(response.data));
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

        axios({
            method: 'get',
            url: Api.TrashProduct,
            headers: {
                'Authorization': localStorage.accessToken
            }
        })
            .then(function (response) {
                setproduct(response.data.trashProduct);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(() => {
        loadData();
    }, []);
    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
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
                                            <input onClick={e => ChangeTrashProduct(e, pro.id)} type="button" value="Khôi phục" />
                                            <input type="button" value="Xoá" />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <ToastContainer />
        </div>
    )
}