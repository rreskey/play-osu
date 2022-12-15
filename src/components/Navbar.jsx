import React from 'react'
import '../App.css'
import logo_wide from "../assets/logo_wide.png"

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbar-left">
            <img src={logo_wide} alt="logo_wide" className='logo--navbar'/>
            <div className='navbar-main'>
                <a className='navbar-btn active'><i className="fa-solid fa-house"></i>На главную</a>
                <a className='navbar-btn'><i className="fa-sharp fa-solid fa-circle-info"></i>О проекте</a>
                <a className='navbar-btn'><i className="fa-solid fa-question"></i>Формат FastCup</a>
                <a className='navbar-btn'><i className="fa-solid fa-user"></i>Стафф</a>
            </div>
        </div>
        <div className='navbar-right'>
            <a className='navbar-btn'><i className="fa-brands fa-discord"></i></a>
            <a className='navbar-btn'><i className="fa-brands fa-vk"></i></a>
            <a className='navbar-btn'><i className="fa-brands fa-twitch"></i></a>
            <a className='navbar-btn'><i className="fa-brands fa-youtube"></i></a>
            <button className='login-btn navbar-btn'>Login</button>
        </div>
    </div>
  )
}
