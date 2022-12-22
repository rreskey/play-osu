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

const auth_url = 'https://osu.ppy.sh/oauth/authorize?response_type=code&client_id=19432&redirect_uri=http://127.0.0.1:5173/play-osu/'

function logwebsite() {
    console.log(`1 -- ${window.location.href}`)
    const cur_url = window.location.href
    const cur_url_arr = cur_url.split('=')
    console.log(cur_url_arr)

    const url = new URL(
        "https://osu.ppy.sh/oauth/token"
    );
    
    let headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
    };

    let body = {
        "client_id": 19432,
        "client_secret": 'ru3LqVTMMyxpb5Qjb4OLwh2NJHjpiq9BV0X2bYHs',
        "code": cur_url_arr[1],
        "grant_type": "authorization_code",
        "redirect_uri": "http://127.0.0.1:5173/play-osu/"
    }

    fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
    })
      .then(response => response.json());
      // .then(response => console.log(response.json()));
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
            <button className='login-btn navbar-btn' onClick={() => logwebsite()}>Login</button>
        </div>
    </div>
  )
}