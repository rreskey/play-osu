import React from 'react'
import '../App.css'  
import rucast from '../assets/rucast.png'
import tournaments from '../assets/tournaments.png'

export function Create() {
  return (
    <div className='content-area'>
      <h2>Стань частью команды организаторов!</h2>
      <div className="content-container">
        <div className="cast">
          <img src={rucast} className="container-image" />
          <p>Начни свою активность вместе с нами и стань на шаг ближе к комментированию официальных World Cup турниров и самых крупных событий в osu! на RUCAST</p>
        </div>
        <div className="staff">
          <img src={tournaments} className="container-image" />
          <p>Суди матчи, проводи трансляции, создавай уникальный дизайн и оформление<br/>Сделай свой вклад в развитие osu!
          <br/>Заполни анкету и начни <a href="#">свой путь</a>!</p>
        </div>
      </div>
    </div>
  )
}
