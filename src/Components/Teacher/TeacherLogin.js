import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    useEffect(()=>{
      const auth = localStorage.getItem('user')
      if(auth){
          navigate('/')
      }
  })

    const handleLogin =()=>{
    console.log(password, email)
    localStorage.setItem('user', JSON.stringify({password, email})); 
         navigate('/')
   }

  return (
    <div className='login'>
     <h1>Log In</h1>
     <input className='inputbox' type='text' placeholder='Email'
     value={email} onChange={(e)=>setEmail(e.target.value)}/>

     <input className='inputbox' type='password' placeholder='Password'
     value={password} onChange={(e)=>setPassword(e.target.value)}/>

     <button onClick={handleLogin} className='btnLogIn'>log In</button>
     <Link to='/teachersignup' >Don't have an account?</Link>
    </div>
  )
}
