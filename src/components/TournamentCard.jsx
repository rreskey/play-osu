import React from 'react'
import '../App.css'  
import logo_small from '../assets/logo_small.png'
import cis from '../assets/CIS_icon.png'

export default function TournamentCard() {
  return (
    <div className='tournament-card'>
        <h3>Solo Masters Autumn 2023</h3>
            <span className='flex'>
                <img src={cis} className='flag'/>   
                <p className='rank-range'>#1 - #10.000</p>
            </span>
        <a href='#' className='info-btn'>Информация</a>
        <div className="dates">
            <div className="inline j-content-fs">
                <i className="fa-solid fa-calendar-days icon"></i>
                <p>8 апреля - 30 апреля</p>
            </div>
            <div className="inline j-content-fs">
                <img src={logo_small} className='icon' />
                <p className='host'>play-osu.ru</p>
            </div>
        </div>
    </div>
  )
}
