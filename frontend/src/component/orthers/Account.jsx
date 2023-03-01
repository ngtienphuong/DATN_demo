import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Api from '../api/Api'

function Account() {
    const [user, setUser] = useState();
    useEffect(() => {
        axios({
            method: 'get',
            url: Api.User,
            headers: {
                Authorization: localStorage.accessToken
            }
        })
            .then(res => setUser(res.data.userData))
            .catch(err => console.log(err))
    }, []);
    if (user) {
        return (
            <div id='footer'>
                <h2 className='text-center'>Thông tin</h2>
                <table className='mx-auto'>
                    <tbody>
                        <tr>
                            <th>Họ và tên</th>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{user.email}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }


}

export default Account