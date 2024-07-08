import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
    <p>© 2024 shady. All rights reserved.</p>
    <ul>
        <li><a href="https://www.linkedin.com/in/shady-samir/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/shadyazzar1" target="_blank" rel="noopener noreferrer">Github</a></li>
    </ul>
</div>
  )
}

export default Footer