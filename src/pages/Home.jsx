import React, { useEffect } from 'react'
import '../App.css'  
import logo from '../assets/32.png'

export function Home() {
    useEffect(() => {
        const links = document.querySelectorAll('li')
        links.forEach(item => {
            item.classList.remove('active')
        })
      }, [])

    return (
        <div className='content-area'>
            <img src={logo} className='logo'/>
        </div>
    )
}
