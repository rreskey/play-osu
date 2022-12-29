import React, { useEffect, useState } from 'react'
import '../App.css'  
import logo_wide from "../assets/logo_wide.png"
import logo from "../assets/32.png"
import { Link } from "react-router-dom"
import userStateQuery from '../state/userState'

export default function Navbar() {

useEffect(() => {
  const links = document.querySelectorAll('li')
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

const [data, setData] = useState(null)

return (
  <header className='inline'>
    <img src={logo_wide} alt="logo_wide" className='logo_wide'/>

    <div className='nav-social-links'>
      <a href='https://discord.com/invite/aDQhsyB' target='_blank' className='nav-social-links-btn'><i className="fa-brands fa-discord discord"></i></a>
      <a href='https://vk.com/playosu' target='_blank' className='nav-social-links-btn'><i className="fa-brands fa-vk vk"></i></a>
      <a href='https://www.twitch.tv/playosuru' target='_blank' className='nav-social-links-btn'><i className="fa-brands fa-twitch twitch"></i></a>
      <a href='https://www.youtube.com/channel/UChNf1_khGnxReYnDsU6B6uw' target='_blank' className='nav-social-links-btn'><i className="fa-brands fa-youtube youtube"></i></a>
      {
        data
          ? <button className='profile-btn'><img className='profile-btn--img' src={data.avatar_url}/></button>
          : <a href={auth_url} className='login-btn'>Login</a>
      }
    </div>  
  </header>

  )
}

