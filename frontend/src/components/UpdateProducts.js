 import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
const UpdateProducts = () => {
    const [name,setName]=useState("")
    const [price,setPrice]=useState("")
    const [category,setCategory]=useState("")
    const [company,setComapany]=useState("")
    const params=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
       getProductDetails()
    },[])
    const getProductDetails=async()=>{
        let result=await fetch(`http://localhost:5000/products/${params.id}`,{
            headers:{
              authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
           })
        result=await result.json()
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setComapany(result.company)
    }
    const updateProduct=async()=>{
        console.log(name,price,category,company)
        const userID=JSON.parse(localStorage.getItem("user"))._id
        let result=await fetch(`http://localhost:5000/products/${params.id}`,{
            method:"put",
            body:JSON.stringify({name,price,category,company}),
            headers:{
                "Content-Type":"application/json",
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
                
            }
        })
        result=await result.json()
        console.log(result)
        setName("")
        setPrice("")
        setCategory("")
        setComapany("")
        navigate('/')
    }
      return (
    <div className='bg-white mt-[50px] flex flex-col w-[300px] m-auto p-[20px] rounded-md space-y-[20px]'> 

     <input className=" p-[10px] rounded-lg bg-slate-300" typeof='text' placeholder='add product name '
     onChange={(e)=>{setName(e.target.value)}}
     value={name}
     ></input>
     <input className=" p-[10px] rounded-lg bg-slate-300" typeof='text' placeholder='category '
     onChange={(e)=>{setPrice(e.target.value)}}
     value={price}
     ></input>
     <input className=" p-[10px] rounded-lg bg-slate-300" typeof='text' placeholder='company '
     onChange={(e)=>{setCategory(e.target.value)}}
     value={category}
     ></input>
     <input className=" p-[10px] rounded-lg bg-slate-300" typeof='text' placeholder='price'
     onChange={(e)=>{setComapany(e.target.value)}}
     value={company}
     ></input>
     <button onClick={updateProduct} className='p-[10px] rounded-lg bg-[#24a0ed]'>Update product</button>
    </div>
  )
}

export default UpdateProducts