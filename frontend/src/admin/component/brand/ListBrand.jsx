import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import Api from "../../../component/api/Api";
import { ToastContainer, toast } from "react-toastify";


function ListBrand() {
    const [brand, setBrand] = useState();
    const ChangeTrashBrand = (e, id) => {
        e.preventDefault()
        var data = JSON.stringify({
            "id": id
        });

        var config = {
            method: 'put',
            url: Api.ChangeTrashBrand,
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
            setTimeout(()=>{
                window.location.reload()
            }, 1000)

    }
    const loadData = () => {
        axios.get(Api.Brand)
            .then(res => setBrand(res.data.brandData))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        loadData()
    }, [brand?.length]);
    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <Link to='/admin/addBrand'><input type="button" value="Add" /></Link>
                <Link to='/admin/trashBrand'><input type="button" value="Trash" /></Link>

                {
                    (brand?.length) ? (
                        <table className="admin-main border w-100">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>CreateAt</th>
                                    <th>UpdateAt</th>
                                    <th>Act</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    brand?.map(item => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>
                                                    <img className="img-admin" src={item.image} alt="" />
                                                </td>
                                                <td>{item.createdAt}</td>
                                                <td>{item.updatedAt}</td>
                                                <td>
                                                    <input onClick={e => { ChangeTrashBrand(e, item.id) }} type="button" value="Xóa" />
                                                    <Link to={'/admin/editBrand/' + item.id}>
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
            <div className="content-backdrop fade" />
            <ToastContainer />
        </div>
    )
}

export default ListBrand