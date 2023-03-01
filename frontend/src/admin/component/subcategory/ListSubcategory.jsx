import React from "react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import Api from "../../../component/api/Api";



function ListSubcategory() {
    const [subcategory, setSubcategory] = useState();
    const [category, setCategory] = useState();
    const loadData = () => {
        axios.get(Api.Category)
            .then(res => setCategory(res.data.categoryData))
            .catch(err => console.log(err))
        axios.get(Api.SubCategory)
            .then(res => setSubcategory(res.data.subcategoryData))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        loadData()
    }, [subcategory?.length]);
    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <Link to='/admin/addSubcategory'><input type="button" value="Add" /></Link>

                <input type="button" value="Trash" />
                {
                    (subcategory?.length) ? (
                        <table className="admin-main border w-100">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>CreateAt</th>
                                    <th>UpdateAt</th>
                                    <th>Act</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    subcategory?.map(subcat => {
                                        return (
                                            <tr key={subcat.id}>
                                                <td>{subcat.id}</td>
                                                <td>{subcat.name}</td>
                                                <td>
                                                    {category?.map(item =>{
                                                        if(item.id === subcat.category)
                                                        return(item.name)
                                                    })}
                                                </td>
                                                <td>{subcat.createdAt}</td>
                                                <td>{subcat.updatedAt}</td>
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

export default ListSubcategory