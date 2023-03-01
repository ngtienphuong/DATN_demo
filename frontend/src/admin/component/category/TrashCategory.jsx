import React from "react"
import { useEffect, useState } from "react";
import Api from "../../../component/api/Api";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function TrashCategory() {
    const [trash, setTrash] = useState();
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
            setTimeout(()=>{
                window.location.reload()
            }, 1000)
    }
    const loadData = () => {
        var config = {
            method: 'get',
            url: Api.TrashCategory,
            headers: {
                'Authorization': localStorage.accessToken
            },
        };
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                setTrash(response.data.trashCategory);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    console.log(trash);
    useEffect(() => {
        loadData()
    }, []);
    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                {
                    (trash?.length) ? (
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
                                    trash?.map(cat => {
                                        return (
                                            <tr key={cat.id}>
                                                <td>{cat.id}</td>
                                                <td>{cat.name}</td>
                                                <td>{cat.createdAt}</td>
                                                <td>{cat.updatedAt}</td>
                                                <td>
                                                    <input onClick={e => { ChangeTrashCategory(e, cat.id) }} type="button" value="Khôi phục" />
                                                    <input type="button" value="Xóa" />
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