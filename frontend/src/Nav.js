import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
        <ul className='ul-nav'>
            <li ><Link to="/">Home Page</Link></li>
            <li ><Link to="/add">Add Product</Link></li>
            <li ><Link to="/update">Update Product</Link></li>
            <li ><Link to="/logout">LogOut</Link></li>
            <li ><Link to="/profile">Profile</Link></li>

        </ul>
        <Outlet/>
    </div>
  )
}

export default Nav