import React from 'react'
import '../App.css'  
import { Link } from "react-router-dom"
import logo from "../assets/32.png"

export default function Pagination() {
  return (
    <div className='pagination'>
        <input type="checkbox" id='nav-toggle' className='nav-toggle '/>
        <label htmlFor="nav-toggle" className='nav-toggle-label'><span></span></label>
        <nav>
            <ul>
                <Link to={'/play'} className={`link`}><li className='active'><i className="fa-regular fa-circle-play"></i>Играй</li></Link>
                <Link to={'/watch'} className={`link`}><li><i className="fa-solid fa-child-reaching"></i>Смотри</li></Link>
                <Link to={'/create'} className={`link`}><li><i className="fa-solid fa-wand-magic"></i>Твори</li></Link>
                <Link to={'/victorious'} className={`link`}><li><i className="fa-solid fa-trophy"></i>Побеждай</li></Link>
            </ul>
            {/* <img src={logo} alt="logo" className='logo'/> */}
        </nav>
    </div>  
  )
}
