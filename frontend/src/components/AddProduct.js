import React from 'react'
import { useState } from 'react'
const AddProduct = () => {
    const [name,setName]=useState("")
    const [price,setPrice]=useState("")
    const [category,setCategory]=useState("")
    const [company,setComapany]=useState("")
    const addProduct=async()=>{
        console.log(name,price,category,company)
        const userID=JSON.parse(localStorage.getItem("user"))._id
        let result=await fetch("http://localhost:5000/addProduct",{
            method:"post",
            body:JSON.stringify({name,price,category,company,userID}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        result=await result.json()
        console.log(result)
        setName("")
        setPrice("")
        setCategory("")
        setComapany("")
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
     <button onClick={addProduct} className='p-[10px] rounded-lg bg-[#24a0ed]'>Add product</button>
    </div>
  )
}

export default AddProduct