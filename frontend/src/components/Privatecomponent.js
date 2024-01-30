import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
const Privatecomponent = () => {
    const auth=localStorage.getItem('user'); // is key 
  return auth?<Outlet/>:<Navigate to="/signup"/>
  
}

export default Privatecomponent;