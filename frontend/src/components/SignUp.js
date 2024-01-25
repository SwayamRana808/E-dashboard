import React, { useState } from 'react'

const SignUp =()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const collectData=()=>{
        console.log(name,email,password)
    }
  return (
    <div className='shadow-[1px_1px_20px_0.3px_white] bg-[white] rounded-lg  flex flex-col  border-2  border-slate-300 p-[10px] max-w-[300px] items-center m-auto mt-[100px]'>
        <h1 className='text-[30px] max-w-[200px]'>Register</h1>
        <input value={name} onChange={ (e)=>setName(e.target.value)} className='border-2 outline-none border-green-300 focus:border-red-600 max-w-[200px] m-[20px] p-[5px]' type="text" placeholder='Enter Name'/>
        <input value={email} onChange={ (e)=>setEmail(e.target.value)}  className='border-2  outline-none border-green-300 focus:border-red-600 max-w-[200px] m-[20px] p-[5px]'  type="text" placeholder='Enter Email'/>
        <input value={password} onChange={ (e)=>setPassword(e.target.value)} className='border-2  outline-none border-green-300 focus:border-red-600 max-w-[200px] m-[20px] p-[5px]'  type="password" placeholder='Enter Password'/>
        <button type="button" onClick={collectData} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign Up</button>

    </div>
  )
}
export default SignUp;