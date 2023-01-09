import React, { useEffect, useState } from 'react'
import '../App.css'  
import logo_wide from "../assets/logo_wide.png"
import { useNavigate } from "react-router-dom"
import userStateQuery from '../state/userState'
import dsc from "../assets/dsc.png"
import tw from "../assets/tw.png"
import vk from "../assets/vk.png"
import yt from "../assets/yt3.png"

export default function Navbar() {
const navigate = useNavigate();

useEffect(() => {
  const links = document.querySelectorAll('li')
  const actives = document.getElementsByClassName('active');
  for(let i = 0; links.length > i; i++) {
    links[i].onClick = function() {
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
    <img src={logo_wide} alt="logo_wide" className='logo_wide' onClick={() => navigate('/play-osu/')}/>
    <div className='nav-social-links'>
      <a href='https://discord.com/invite/aDQhsyB' target='_blank' className='nav-social-links-btn'><img src={dsc} alt='dsc logo navbar' /></a>
      <a href='https://vk.com/playosu' target='_blank' className='nav-social-links-btn'><img src={vk} alt='vk logo navbar' /></a>
      <a href='https://www.twitch.tv/playosuru' target='_blank' className='nav-social-links-btn'><img src={tw} alt='twitch logo navbar' /></a>
      <a href='https://www.youtube.com/channel/UChNf1_khGnxReYnDsU6B6uw' target='_blank' className='nav-social-links-btn'><img src={yt} alt='youtube logo navbar' /></a>
      {
        data
          ? <button className='profile-btn'><img className='profile-btn--img' src={data.avatar_url}/></button>
          : <a href={auth_url} className='login-btn'>Login</a>
      }
    </div>  
  </header>
  )
}

