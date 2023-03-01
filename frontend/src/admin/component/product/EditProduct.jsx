import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Api from "../../../component/api/Api";

function EditProduct() {
    var id = useParams()
    var checkimg =''
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [subcat, setSubcat] = useState();
    const [avaliable, setAvaliable] = useState();
    const [image, setImage] = useState();
    const [price, setPrice] = useState();
    const [expiry, setExpiry] = useState('');
    const [brand, setBrand] = useState('');
    const [description, setDescription] = useState('');
    const [subcategorys, setSubcategorys] = useState();
    const [brands, setBrands] = useState();
    const HandleSave = () => {
        const data = new FormData()
        data.append('id', id.id)
        data.append('name', name)
        data.append('subcat', subcat)
        data.append('avaliable', avaliable)
        if(image!=checkimg){data.append('image', image)}
        data.append('price', price)
        data.append('expiry', expiry)
        data.append('brand',brand)
        data.append('description', description)
        axios({
            method: 'put',
            url: Api.EditProduct,
            headers:{
                Authorization: localStorage.accessToken
            },
            data: data
        })
        .then( res=> {
            toast(JSON.stringify(res.data.mes))
            setTimeout(()=>{
                navigate('/admin/listProduct')
            },2000)
        })
        .catch(err => console.log(err));
    }
    const loadData = () => {
        axios({
            method: 'GET',
            url: Api.GetOneProduct(id.id),
            headers:{
                Authorization: localStorage.accessToken
            }
        })
        .then(res =>{
            setName(res.data.productData.name);
            setSubcat(res.data.productData.subcat)
            setAvaliable(res.data.productData.avaliable)
            setImage(res.data.productData.image)
            setPrice(res.data.productData.price)
            setExpiry(res.data.productData.expiry)
            setBrand(res.data.productData.brand)
            setDescription(res.data.productData.description)
            checkimg= res.data.productData.image
        })
        .catch(err => console.log(err));
        axios.get(Api.SubCategory)
            .then(res => setSubcategorys(res.data.subcategoryData))
            .catch(err => console.log(err))
        axios.get(Api.Brand)
            .then(res => setBrands(res.data.brandData))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        loadData()
    }, []);
    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="admin-main row container-fluit">
                    <h1 className="text-center">Edit Product</h1>
                    <label>Name</label>
                    <input value={name} onChange={e => setName(e.target.value)} className="input-admin" type="text" />
                    <label>Subcategory</label>
                    <select value={subcat} defaultValue='default' onChange={e => setSubcat(e.target.value)} className="input-admin">
                        <option value="default" disabled={true}>Choose subcategory</option>
                        {
                            subcategorys?.map(subcat => {
                                return (
                                    <option key={subcat.id} value={subcat.id}>{subcat.name}</option>
                                )
                            })
                        }
                    </select>
                    <label>Avaliable</label>
                    <input value={avaliable} onChange={e => setAvaliable(e.target.value)} className="input-admin" type="number" />
                    <label>Image</label>
                    <input onChange={e => setImage(e.target.files[0])} className="input-admin" type="file" />
                    <img className="img-admin" src={image} alt="" />
                    <label>Price</label>
                    <input value={price} onChange={e => setPrice(e.target.value)} className="input-admin" type="number" />
                    <label>Expiry</label>
                    <input value={expiry} onChange={e => setExpiry(e.target.value)} className="input-admin" type="text" />
                    <label>Brand</label>
                    <select value={brand} defaultValue='default' onChange={e => setBrand(e.target.value)} className="input-admin">
                        <option value="default" disabled={true}>Choose brand</option>
                        {
                            brands?.map(brand => {
                                return (
                                    <option key={brand.id} value={brand.id}>{brand.name}</option>
                                )
                            })
                        }
                    </select>
                    <label>Description</label>
                    <textarea value={description} onChange={e => setDescription(e.target.value)} cols="30" rows="10"></textarea>
                    <button onClick={HandleSave} type="submit" className="btn input-admin">Save</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default EditProduct