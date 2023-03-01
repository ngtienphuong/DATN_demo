import React, { useState, useEffect} from "react";
import { ToastContainer, toast } from "react-toastify";


function AddSubcategory(){
    const [name, setName] = useState();
    return(
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="admin-main row container-fluit">
                    <h1 className="text-center">Add Category</h1>
                    <label>Name</label>
                    <input onChange={e => { setName(e.target.value) }} className="py-2" type="text" />
                    
                    <button  type="submit" className="btn">Save</button>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default AddSubcategory