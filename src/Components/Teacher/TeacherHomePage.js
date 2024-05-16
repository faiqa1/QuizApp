import React from 'react'
import { Link } from 'react-router-dom'

export default function TeacherHomePage() {
  return (
    <div>
      <ul>
        <li><Link to=''>Create Quiz</Link></li>
        <li><Link to=''>View Details</Link></li>
        <li><Link to=''>Feedback</Link></li>
        <li><Link to=''>Discussion Forums</Link></li>
      </ul>
    </div>
  )
}
