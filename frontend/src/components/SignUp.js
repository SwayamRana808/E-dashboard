import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp =()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    
    useEffect(()=>{
      const auth=localStorage.getItem('user');
      if(auth){
         navigate('/')
      }
    })
    const collectData=async ()=>{
        console.log(name,email,password)
        let result=await fetch('http://localhost:5000/register',{
          method:'post',
          body:JSON.stringify({name,email,password}),
          headers:{
            'Content-Type':'application/json'
          }
        })
        result =await result.json()
        console.log(result)
        localStorage.setItem("user",JSON.stringify(result.result)) //The JSON.stringify() static method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.
        localStorage.setItem("token",JSON.stringify(result.auth))
        if(result.auth){
          navigate('/')
        }
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