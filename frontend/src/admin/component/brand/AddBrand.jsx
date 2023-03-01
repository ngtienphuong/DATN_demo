import React from "react";
import axios from "axios";
import { useState } from "react";
import Api from "../../../component/api/Api";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function AddBrand() {
    const navigate = useNavigate()
    const [name, setName] = useState();
    const [image, setImage] = useState();
    
    const HandleSave =() =>{
        const data = new FormData()
        data.append('name', name)
        data.append('image', image)

        axios({
            method: 'POST',
            url: Api.AddBrand,
            headers:{
                Authorization: localStorage.accessToken
            },
            data: data
        })
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                toast(JSON.stringify(response.data.mes))
                setTimeout(()=>{
                    navigate('/admin/listBrand')
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
                    <h1 className="text-center">Add Brand</h1>
                    <label>Name</label>
                    <input onChange={e => { setName(e.target.value) }} className="py-2" type="text" />
                    <label>Image</label>
                    <input onChange={e=>setImage(e.target.files[0])} type="file"/>
                    <button onClick={HandleSave} type="submit" className="btn">Save</button>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}