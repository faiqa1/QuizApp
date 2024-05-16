import React from 'react'
import { Link } from 'react-router-dom'

export default function StudentHomePage() {
  return (
    <div>
        <ul>
        <li><Link to=''>Start Quiz</Link></li>
        <li><Link to=''>Progress</Link></li>
        <li><Link to=''>Resource and Material</Link></li>
        <li><Link to=''>Discussion Forums</Link></li>
      </ul>
    </div>
  )
}
