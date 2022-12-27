import React from 'react'
import logo from "../assets/32.png"
import '../App.css'  

export function Home() {
    return (
    <div className="wrapper">
        <div className='container--logo'>
            <img src={logo} alt="logo" className='logo__desktop'/>
                <div className='page-links'>
                    <button className='page-links-btn play'><span className="text-gradient">Играй</span></button>
                    <button className='page-links-btn watch'><span className="text-gradient">Смотри</span></button>
                <div className="page-links--secondary">
                    <button className='page-links-btn win'><span className="text-gradient">Побеждай</span></button>
                    <button className='page-links-btn create'><span className="text-gradient">Твори</span></button>
                </div>
            </div>
        </div>
    </div>
  )
}
