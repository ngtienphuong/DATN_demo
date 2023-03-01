import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className=' bg-white'>
      <div className='d-flex justify-content-center'>
        <img src="assets/image/notfound.png" alt="" />
      </div>
      <div className='text-center'>
        <p  className='text-center h1'>Không tìm thấy đường dẫn {window.location.href}</p>
      <Link to='/' className='btn'>Quay về trang chủ</Link>
      </div>
      
    </div>
  )
}
export default NotFound;