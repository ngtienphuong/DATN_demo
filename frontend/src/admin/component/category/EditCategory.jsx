import React, { useEffect, useState } from "react";
import axios from "axios";
import Api from "../../../component/api/Api";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";


function EditCategory() {
    var id = useParams()
    const natigate = useNavigate()
    const [name, setName] = useState();
    const [status, setStatus] = useState(1);
    const EditCategory = () =>{
        axios({
            method: "POST",
            url: Api.EditCategory,
            headers:{
                Authorization: localStorage.accessToken,
                'Content-Type': "application/json"
            },
            data: JSON.stringify({
                "id": +id.id,
                "name": name,
                "status": status
            })
        })
        .then(res=>{
            console.log(JSON.stringify(res.data))
            toast(JSON.stringify(res.data.mes))
            setTimeout(()=>{
                natigate('/admin/listCategory')
            },2000)
        })
        .catch(err=>console.log(err))
    }
    useEffect(() => {
        axios({
            method: 'get',
            url: Api.GetOneCategory(id.id),
            headers: {
                Authorization: localStorage.accessToken
            }
        })
        .then(res=>{
            setName(res.data.categoryData.name);
            setStatus(res.data.categoryData.status)
        })
        .catch(err =>console.log(err))
    }, [id]);
    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="admin-main row container-fluit">
                    <h1 className="text-center">Edit Category</h1>
                    <label>Name</label>
                    <input value={name} onChange={e => { setName(e.target.value) }} className="py-2" type="text" />
                    <label>Status</label>
                    <select value={status} onChange={e => { setStatus(e.target.value) }} className="my-2 py-2">
                        <option value="1">Show</option>
                        <option value="0">Hide</option>
                    </select>
                    <button onClick={EditCategory} type="submit" className="btn">Save</button>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default EditCategory