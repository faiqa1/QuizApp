import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'


export default function StudentSignup() {
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

    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     const handleSignup =()=>{

        if(!name || !email || !password){
            setError(true)
            return false;
         }


         if (!passwordRegex.test(password)) {
             setError(true);
             console.log("Password must be at least 6 characters long and contain at least 1 special character and 1 number.");
             return false;
         }
     
         // Regular expression for validating email
        
     
         if (!emailRegex.test(email)) {
             setError(true);
             console.log("Please enter a valid email address.");
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
     {/* {error && !email &&<span className='invalidinput'>Invalid email</span>} */}
     {error && ! email && !emailRegex.test(email) && <span className='invalidinput'>Invalid email format</span>}



     <input className='inputbox' type='password' placeholder='Password'
     value={password} onChange={(e)=>setPassword(e.target.value)}/>
     {/* {error && !password &&<span className='invalidinput'>Invalid password</span>}
 */}
 {error && !password && !passwordRegex.test(password) && <span className='invalidinput'>Password must be at least 6 characters long and contain at least 1 special character and 1 number</span>}


     <button onClick={handleSignup} className='btnSignUp'>Sign Up</button>
     <Link to='/teacherlogin' >Already have an account?</Link>

    </div>
  )
}




