import React  from 'react'
import { Link,useNavigate } from 'react-router-dom'
const Nav = () => {
  const navigate=useNavigate();
  const auth=localStorage.getItem('user');
  const logout=()=>{
    localStorage.clear();
    navigate('/signup')
  }
  return (
    <div className='bg-teal-600 ul-nav'>
        <ul className=' text-white  pr-[7vw] flex justify-end gap-[20px] h-[40px] items-center'>
           { auth?<><li className=' '><Link to="/">Home Page</Link></li>
            <li ><Link to="/add">Add Product</Link></li>
            <li ><Link to="/update">Update Product</Link></li>
            <li ><Link to="/profile">Profile</Link></li>
            <li ><Link onClick={logout} to="/signup">LogOut</Link> <span className='bg-black'>{JSON.parse(auth).email}</span></li></>
            : <>
            <li ><Link to="/login">Login</Link></li>
            <li><Link to="/signup">SignUp</Link></li>
            </>
           
           }
        </ul>
         
    </div>
  )
}

export default Nav