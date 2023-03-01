import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import Api from "../../../component/api/Api";
import { ToastContainer, toast } from "react-toastify";


function ListCategory() {
    const [category, setCategory] = useState();
    const ChangeTrashCategory = (e, id) => {
        e.preventDefault()
        var data = JSON.stringify({
            "id": id
        });

        var config = {
            method: 'put',
            url: Api.ChangeTrashCategory,
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
        axios.get(Api.Category)
            .then(res => setCategory(res.data.categoryData))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        loadData()
    }, [category?.length]);
    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <Link to='/admin/addCategory'><input type="button" value="Add" /></Link>
                <Link to='/admin/trashCategory'><input type="button" value="Trash" /></Link>

                {
                    (category?.length) ? (
                        <table className="admin-main border w-100">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>CreateAt</th>
                                    <th>UpdateAt</th>
                                    <th>Act</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    category?.map(cat => {
                                        return (
                                            <tr key={cat.id}>
                                                <td>{cat.id}</td>
                                                <td>{cat.name}</td>
                                                <td>{cat.createdAt}</td>
                                                <td>{cat.updatedAt}</td>
                                                <td>
                                                    <input onClick={e => { ChangeTrashCategory(e, cat.id) }} type="button" value="Xóa" />
                                                    <Link to={'/admin/editCategory/' + cat.id}>
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

export default ListCategory