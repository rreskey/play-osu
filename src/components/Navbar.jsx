import React, { useEffect, useState } from 'react'
import '../App.css'
import logo_wide from "../assets/logo_wide.png"
import { Link } from "react-router-dom"

export default function Navbar() {

useEffect(() => {
  const links = document.querySelectorAll('.navbar-btn--left')
  const actives = document.getElementsByClassName('active');
  for(let i = 0; links.length > i; i++) {
    links[i].onclick = function() {
      let currentActive = actives[0];
      if(links[i].classList === currentActive.classList) {
        return links[i].classList
      } 
      if (currentActive) {
        currentActive.classList.remove("active");
      }
      if (currentActive !== this) {
        this.classList.add("active");
      }
    }
  }
}, [])

const auth_url = 'https://osu.ppy.sh/oauth/authorize?response_type=code&client_id=19432&redirect_uri=http://localhost:6001/api/login'

const [token, setToken] = useState(null)

useEffect(() => {
  fetch('http://localhost:6001/api/login')
    .then(response => response.json())
    .then(result => console.log(result))
  // fetch('http://localhost:6001/api/auth')
  //   .then(response => response.json())
  //   .then(result => console.log(result))
    console.log(token)
    // .then(response => console.log(response.json()))
}, [])

// console.log(token)

function test() {
  fetch('http://localhost:6001/api/login')
    .then(response => response.json())
    .then(json => {
      console.log(json)
    })
}

  return (
    <div className='navbar'>
        <div className="navbar-left">
            <img src={logo_wide} alt="logo_wide" className='logo--navbar'/>
            <div className='navbar-main'>
                <Link to={'/play-osu/'} className={`navbar-btn--left link active`}><i className="fa-solid fa-house"></i>На главную</Link>
                <Link to={'/play-osu/about'} className={`navbar-btn--left link`}><i className="fa-sharp fa-solid fa-circle-info"></i>О проекте</Link>
                <Link to={'/play-osu/fastcup'} className={`navbar-btn--left link`}><i className="fa-solid fa-question"></i>Формат FastCup</Link>
                <Link to={'/play-osu/staff'} className={`navbar-btn--left link`}><i className="fa-solid fa-user"></i>Стафф</Link>
            </div>
        </div>
        <div className='navbar-right'>
            <a href='https://discord.com/invite/aDQhsyB' target='_blank' className='navbar-btn--right'><i className="fa-brands fa-discord discord"></i></a>
            <a href='https://vk.com/playosu' target='_blank' className='navbar-btn--right'><i className="fa-brands fa-vk vk"></i></a>
            <a href='https://www.twitch.tv/playosuru' target='_blank' className='navbar-btn--right'><i className="fa-brands fa-twitch twitch"></i></a>
            <a href='https://www.youtube.com/channel/UChNf1_khGnxReYnDsU6B6uw' target='_blank' className='navbar-btn--right'><i className="fa-brands fa-youtube youtube"></i></a>
            <a href={auth_url} className='login-btn navbar-btn'>Login l</a>
        </div>
    </div>
  )
}