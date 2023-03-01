import React, { useEffect, useState } from "react";
import axios from "axios";
import Api from "../../../component/api/Api";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";


function EditBrand() {
    const navigate = useNavigate()
    var id = useParams()
    const [name, setName] = useState();
    const [image, setImage] = useState();
    var checkimg =''
    const HandleSave = () =>{
        const data = new FormData()
        data.append('name', name)
        if(image!=checkimg){data.append('image', image)}
        data.append('id', +id.id)
        axios({
            method: 'put',
            url: Api.EditBrand,
            headers:{
                Authorization: localStorage.accessToken,
            },
            data: data
        })
        .then(res=> {
            console.log(JSON.stringify(res.data))
            toast(JSON.stringify(res.data.mes))
            setTimeout(()=>{
                navigate('/admin/listBrand')
            },2000)
        })
        .catch(err=> console.log(err))
    }
    const loadData = () =>{
        axios({
            method: "GET",
            url: Api.GetOneBrand(id.id),
            headers:{
                Authorization: localStorage.accessToken
            }
        })
        .then(res=>{
            setName(res.data.brandData.name)
            setImage(res.data.brandData.image)
            checkimg= res.data.brandData.image
        })
        .catch(err=>console.log(err))
    }
    console.log(checkimg)
    useEffect(() => {
        loadData();
    },[id]);
    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="admin-main row container-fluit">
                    <label>Name</label>
                    <input value={name} onChange={e=>{setName(e.target.value)}} type="text" />
                    <label>Image</label>
                    <input onChange={e=>{setImage(e.target.files[0])}} type="file" name="" id="" />
                    <img className="img-admin" src={image} alt="" />
                    <button type="submit" onClick={HandleSave} className="btn">Save</button>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default EditBrand