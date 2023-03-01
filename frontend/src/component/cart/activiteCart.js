import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Api from "../api/Api";
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from "react-router-dom";

export function AddToCart(e, id) {
    e.preventDefault();
    var data = JSON.stringify({
        "id": id
    });

    var config = {
        method: 'post',
        url: Api.AddCart,
        headers: {
            'Authorization': localStorage.accessToken,
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            toast(response.data.mes,{
                position: toast.POSITION.TOP_CENTER
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function DeleteCart(e, id) {
    e.preventDefault();
    var data = JSON.stringify({
        "id": id
    });

    var config = {
        method: 'delete',
        url: Api.DeleteCart,
        headers: {
            'Authorization': localStorage.accessToken,
            'Content-Type': 'application/json'
        },
        data: data
    };
    axios(config)
        .then(res=>console.log(res))
        .catch(error => console.log(error));
}

export function DeleteAllCart(e) {
    console.log('dete')
    e.preventDefault();
    // var data = JSON.stringify({
    //     "id": id
    // });

    var config = {
        method: 'delete',
        url: Api.DeleteAllCart,
        headers: {
            'Authorization': localStorage.accessToken,
            'Content-Type': 'application/json'
        },
        // data: data
    };
    axios(config)
        .then(res=>console.log(res))
        .catch(error => console.log(error));
}