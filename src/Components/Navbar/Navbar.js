import React from 'react'
import logo from '../Images/logo.png'
import { Link, useNavigate}
 from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const auth = localStorage.getItem('user')
  const logout =()=>{
    localStorage.clear()
    navigate('/signup')
  }
  return (
    <>
    <nav className="nav">
        <div className='nav-logo-container'>
            <img src= {logo} alt=''/>  
        </div>
        <div className='navbar-links-container'>
          <li><Link to ='/'>Home</Link></li>
          <li><Link to ='/blog'>Blog</Link></li>
          <li><Link to ='/quiz'>Quiz</Link></li>
          <li> <Link to ='/about'>About</Link></li>
          {  
             auth ? 
          <li><Link  onClick={logout}to='/choice' className='btn-signup'>Log out</Link></li>
           :<>
            <li><Link className='btn-login' to='choice/'>Log In</Link></li>
          <li><Link className='btn-signup' to='choice/'>Sign Up</Link></li>
           </>
}
        </div>
    </nav>
    </>
  )
}
