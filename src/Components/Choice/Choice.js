import React from 'react'
import { BrowserRouter, 
    Routes, Route,Link } from 'react-router-dom'

export default function Choice() {
  return (
    <div>
        
      <h1>choose one</h1>
      <ul>
        <li><Link to='/teachersignup'>Teacher</Link></li>
        <li><Link to='/studentsignup'>Student</Link></li>
      </ul>
    </div>
  )
}
