import React from "react";
import axios from "axios";
import { useState } from "react";
import Api from "../../../component/api/Api";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function AddCategory() {
    const natigate = useNavigate()
    const [name, setName] = useState();
    const [status, setStatus] = useState(1);
    
    const AddCategory =() =>{
        var data = JSON.stringify({
            "name": name,
            "status": status
        });

        var config = {
            method: 'post',
            url: Api.AddCategory,
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
                setTimeout(()=>{
                    natigate('/admin/listCategory')
                },2000)
                
            })
            .catch(function (error) {
                console.log(error);
                toast(error.response.data.mes)
            });
        
    }
    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="admin-main row container-fluit">
                    <h1 className="text-center">Add Category</h1>
                    <label>Name</label>
                    <input onChange={e => { setName(e.target.value) }} className="py-2" type="text" />
                    <label>Status</label>
                    <select onChange={e => { setStatus(e.target.value) }} className="my-2 py-2">
                        <option value="1">Show</option>
                        <option value="0">Hide</option>
                    </select>
                    <button onClick={AddCategory} type="submit" className="btn">Save</button>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}