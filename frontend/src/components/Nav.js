import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='bg-teal-600 ul-nav'>
        <ul className=' text-white  pr-[7vw] flex justify-end gap-[20px] h-[40px] items-center'>
            <li className=' '><Link to="/">Home Page</Link></li>
            <li ><Link to="/add">Add Product</Link></li>
            <li ><Link to="/update">Update Product</Link></li>
            <li ><Link to="/logout">LogOut</Link></li>
            <li ><Link to="/profile">Profile</Link></li>
            <li ><Link to="/signup">SignUp</Link></li>

        </ul>
        <Outlet/>
    </div>
  )
}

export default Nav