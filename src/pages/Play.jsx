import React, { useEffect } from 'react'
import TournamentCard from '../components/TournamentCard'
import std from '../assets/std.png'
import ctb from '../assets/ctb.png'

export function Play() {
  useEffect(() => {
    const buttons = document.querySelectorAll('.mode-btn')
    const actives = document.getElementsByClassName('btn-active');
    for(let i = 0; buttons.length > i; i++) {
      buttons[i].onclick = function() {
        let currentActive = actives[0];
        if(buttons[i].classList === currentActive.classList) {
          return buttons[i].classList
        } 
        if (currentActive) {
          currentActive.classList.remove("btn-active");
        }
        if (currentActive !== this) {
          this.classList.add("btn-active");
        }
      }
    }
  }, [])

  console.log(window.innerWidth)

  return (
    <div className="wrapper">
      <div className="play content-area">
        <div className="row">
          <div className="mode-select">
              <button className='mode-btn mode-btn--left btn-active'><img src={std} /></button>
              <button className='mode-btn mode-btn--right'><img src={ctb} /></button>
          </div>
          <div className="page-select">
            <button className="prev-page"><i className="fa-solid fa-angles-left"></i></button>
            <span className='cur-page'>1</span>
            <button className="next-page"><i className="fa-solid fa-angles-right"></i></button>
          </div>
        </div>
        <div className="play-center">
          <h2>Текущие турниры</h2>
          <div className="tournaments">
            <TournamentCard />
            <TournamentCard />
            <TournamentCard />
            {window.innerWidth > 700? <TournamentCard /> : null}
            {window.innerWidth > 700? <TournamentCard /> : null}
            {window.innerWidth > 700? <TournamentCard /> : null}
            {window.innerWidth > 1200? <TournamentCard /> : null}
            {window.innerWidth > 1200? <TournamentCard /> : null}
            {window.innerWidth > 1200? <TournamentCard /> : null}
          </div>
        </div>
      </div>
    </div>
  )
}
