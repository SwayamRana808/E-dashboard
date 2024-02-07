import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
const Login = () => {
  
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    
    
    useEffect(()=>{
      const auth=localStorage.getItem('user');
      if(auth){
         navigate('/')
      }
    })
    const handleClick=async ()=>{
       
        let result =await fetch('http://localhost:5000/login',{
          method:'post',
          body:JSON.stringify({email,password}),
          headers:{
            'Content-Type':'application/json'
          }
        })
        result=await result.json();

        console.log(result)
        if(result.name){
          localStorage.setItem('user',JSON.stringify(result))
          navigate("/ ")
        }else{
          alert("please enter correct details")
        }
    }
  return (
    <div className='shadow-[1px_1px_20px_0.3px_white] bg-[white] rounded-lg  flex flex-col  border-2  border-slate-300 p-[10px] max-w-[300px] items-center m-auto mt-[100px]'>
    <h1 className='text-[30px] max-w-[200px]'>Login</h1>
    <input value={email} onChange={ (e)=>setEmail(e.target.value)}  className='border-2  outline-none border-green-300 focus:border-red-600 max-w-[200px] mt-[20px] p-[5px]'  type="text" placeholder='Enter Email'/>
    <input value={password} onChange={ (e)=>setPassword(e.target.value)} className='border-2  outline-none border-green-300 focus:border-red-600 max-w-[200px] m-[10px] p-[5px]'  type="password" placeholder='Enter Password'/>
    <button type="button"  onClick={handleClick} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>

</div>
  )
}

export default Login