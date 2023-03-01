import React from "react";
import { Route, Routes } from "react-router-dom";
import ListCategory from "./component/category/ListCategory";
import AddCategory from "./component/category/AddCategory";
import Dashboard from "./component/Dashboard";
import ListSubcategory from "./component/subcategory/ListSubcategory";
import ListProduct from "./component/product/ListProduct";
import ListUser from "./component/user/ListUser";
import TrashCategory from "./component/category/TrashCategory";
import EditCategory from "./component/category/EditCategory";
import AddProduct from "./component/product/AddProduct";
import ListBrand from "./component/brand/ListBrand";
import AddBrand from "./component/brand/AddBrand";
import TrashBrand from "./component/brand/TrashBrand";
import EditBrand from "./component/brand/EditBrand";
import TrashProduct from "./component/product/TrashProduct";
import EditProduct from "./component/product/EditProduct";
import AddSubcategory from "./component/subcategory/AddSubcategory";

export default function AdminRoute(){
    return(
        <Routes>
            <Route path="*" element={<Dashboard/>}></Route>
            {/* ==============================BRAND================================== */}
            <Route path="/listBrand" element={<ListBrand/>}></Route>
            <Route path="/addBrand" element={<AddBrand/>}></Route>
            <Route path="/trashBrand" element={<TrashBrand/>}></Route>
            <Route path="/editBrand/:id" element={<EditBrand/>}></Route>

            {/* ==============================CATEGORY================================== */}
            <Route path="/listCategory" element={<ListCategory/>}></Route>
            <Route path="/addCategory" element={<AddCategory/>}></Route>
            <Route path="/trashCategory" element={<TrashCategory/>}></Route>
            <Route path="/editCategory/:id" element={<EditCategory/>}></Route>

            {/* ==============================SUBCATEGORY================================== */}
            <Route path="/listSubcategory" element={<ListSubcategory/>}></Route>
            <Route path="/addSubcategory" element={<AddSubcategory/>}></Route>

            {/* ==============================PRODUCT================================== */}
            <Route path="/listProduct" element={<ListProduct/>}></Route>
            <Route path="/addProduct" element={<AddProduct/>}></Route>
            <Route path="/trashProduct" element={<TrashProduct/>}></Route>
            <Route path="/editProduct/:id" element={<EditProduct/>}></Route>


            <Route path="/listUser" element={<ListUser/>}></Route>
        </Routes>
    )
}