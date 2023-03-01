import React from "react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import Api from "../../../component/api/Api";



function ListUser() {

    const [user, setUser] = useState();
    const loadData = () => {
        axios.get(Api.AllUser)
            .then(res => setUser(res.data.userData))
            .catch(err => console.log(err))
    }
    console.log(user)
    useEffect(() => {
        loadData()
    }, [user?.length]);
    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <Link to='/admin/addCategory'><input type="button" value="Add" /></Link>
                
                <input type="button" value="Trash" />
                {
                    (user?.length) ? (
                        <table className="admin-main border w-100">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Avatar</th>
                                    <th>Email</th>
                                    <th>CreateAt</th>
                                    <th>UpdateAt</th>
                                    <th>Act</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user?.map(item => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>
                                                    <img src={item.avatar} alt="" />
                                                </td>
                                                <td>{item.email}</td>
                                                <td>{item.createdAt}</td>
                                                <td>{item.updatedAt}</td>
                                                <td>
                                                    <input type="button" value="Xóa" />
                                                    <input type="button" value="Sửa" />
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
        </div>
    )
}

export default ListUser