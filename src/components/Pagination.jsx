import React, { useEffect } from 'react'
import '../App.css'  
import { Link } from "react-router-dom"

export default function Pagination() {

  useEffect(() => {
    const links = document.querySelectorAll('li')
    const actives = document.getElementsByClassName('active')
    const checkbox = document.getElementById('nav-toggle')

    for(let i = 0; links.length > i; i++) {
      links[i].onclick = function() {
        let currentActive = actives[0];
        checkbox.click()
        if(actives[0] && links[i].classList === currentActive.classList) {
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

  return (
    <div className='pagination'>
        <input type="checkbox" id='nav-toggle' className='nav-toggle '/>
        <label htmlFor="nav-toggle" className='nav-toggle-label'><span></span></label>
        <nav>
            <ul>
                <Link to={'/play-osu/play'} className={`link`}><li className='active'><i className="fa-regular fa-circle-play"></i>Играй</li></Link>
                <i className="fa-solid fa-circle"></i>
                <Link to={'/play-osu/watch'} className={`link`}><li><i className="fa-solid fa-child-reaching"></i>Смотри</li></Link>
                <i className="fa-solid fa-circle"></i>
                <Link to={'/play-osu/create'} className={`link`}><li><i className="fa-solid fa-wand-magic"></i>Твори</li></Link>
                <i className="fa-solid fa-circle"></i>
                <Link to={'/play-osu/victorious'} className={`link`}><li><i className="fa-solid fa-trophy"></i>Побеждай</li></Link>
            </ul>
        </nav>
    </div>  
  )
}
