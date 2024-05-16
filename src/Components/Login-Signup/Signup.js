import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const navigate = useNavigate();
    // useEffect(()=>{
    //     const auth = localStorage.getItem('user')
    //     if(auth){
    //         navigate('/login')
    //     }
    // },[])
    
     const handleSignup =()=>{

        if(!name || !email || !password){
            setError(true)
            return false;
         }

      console.log(name,password, email)
      localStorage.setItem('user', JSON.stringify({name, password, email})); 
      navigate('/login')
    }
  return (
    <div className='signup'>
     <h1>Signup form</h1>
     <input className='inputbox' type='text' placeholder='enter name'
     value={name} onChange={(e)=>setName(e.target.value)}/>
    {error && !name && <span className='invalidinput'> Invalid name</span>}

     <input className='inputbox' type='text' placeholder='Email'
     value={email} onChange={(e)=>setEmail(e.target.value)}/>
     {error && !email &&<span className='invalidinput'>Invalid email</span>}


     <input className='inputbox' type='password' placeholder='Password'
     value={password} onChange={(e)=>setPassword(e.target.value)}/>
     {error && !password &&<span className='invalidinput'>Invalid password</span>}


     <button onClick={handleSignup} className='btnSignUp'>Sign Up</button>

    </div>
  )
}




