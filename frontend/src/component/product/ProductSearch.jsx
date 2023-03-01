import React from 'react'
import axios from 'axios';
import Api from '../api/Api';
import { useState, useEffect } from 'react';

function ProductSearch(props) {
    const [products, setProducts] = useState([]);
    const loadData = () => {
        axios.get(Api.Search(props.name.name))  
            .then(res => {setProducts(res.data)})
            .catch(err => {console.log(err)})
    }
    useEffect(() => {
        loadData()
    }, []);
    console.log(products)
    return (
        <div id='footer'>
            
            dcbdhjnm
        </div>
    )
}

export default ProductSearch