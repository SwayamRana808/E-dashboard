import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ProductsList = () => {
const [products,setProducts]=useState([])
useEffect(()=>{
  getProducts();
},[])
const getProducts=async()=>{
 let result = await fetch('http://localhost:5000/products',{
  headers:{
    authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
  }
 })
 result=await result.json()
 setProducts(result)
}
const deleteProduct=async(id)=>{
 let result=await fetch(`http://localhost:5000/products/${id}`,{
    method:'Delete',
    headers:{
      authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
 })
 result =await result.json()
 console.log(result)
 getProducts()
}
const searchProduct=async(e)=>{
 let key=e.target.value
 console.log(key)
 if(key){
  let result=await fetch(`http://localhost:5000/search/${key}`,{
    headers:{
      authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
   })
  result =await result.json()
  setProducts(result)
 }else{
  getProducts()
 }
}
  return (
    <div >
       <h1 className='text-white text-[40px] text-center bg-slate-400 my-[50px]'>ProductsList</h1>
       <div className='bg-slate-300 w-fit my-[50px] rounded-lg m-auto'>
         <input onChange={searchProduct} className=" text-ellipsis w-[40vw] rounded-lg py-[15px] px-[20px]" type="text" placeholder='search products by name category company' ></input>
       </div>
        <ul className='bg-white rounded-t-lg max-w-[50vw]   m-auto flex   p-[10px] space-x-[10px] '>
        <li className='  text-center flex-1 border-r-[1px] border-gray-600'>S.no</li>
        <li className='  text-center flex-1 border-r-[1px] border-gray-600'>Name</li>
        <li className='  text-center flex-1 border-r-[1px] border-gray-600'>Price</li>
        <li className='  text-center flex-1 border-r-[1px] border-gray-600'>Category</li>
        <li className='  text-center flex-1 border-r-[1px] border-gray-600'>Company</li>
        <li className='  text-center flex-[2]'>Operation </li>
       </ul>
       {products.length>0?products.map((res,id)=>{
        return (
             <ul key={id} className='bg-white  max-w-[50vw]   border-t-[1px] border-slate-400  m-auto flex  items-center  p-[10px] space-x-[10px] '>
                <li className='text-center flex-1'>{id+1}</li>
                <li className='text-center  flex-1'>{res.name}</li>
                <li className=' text-center   flex-1'>${res.price}</li>
                <li className= ' text-center  flex-1'>{res.category}</li>
                <li className=' text-center  flex-1'>{res.company}</li>
                <li className=' text-center flex-[2]'>
                  <button  onClick={()=>deleteProduct(res._id)} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                  <Link to={"/update/"+res._id}><button  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button></Link>
                </li>
                
            </ul>
             )
       }):<h1 className='text-red-800 font-bold text-center'>NO PRODUCTS FOUND !</h1>}
       </div>
    
  )
}

export default ProductsList