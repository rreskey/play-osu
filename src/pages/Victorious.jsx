import React from 'react'
import '../App.css'  
import supporter from '../assets/supporter.jpg'
import play_osu_black from '../assets/play_osu_black.jpg'

export function Victorious() {
  return (
    <div className='content-area victorious'>
      <h2>Получай награды за турниры!</h2>
      <div className="content-container">
        <div className="supporter">
          <img src={supporter} className="container-image"/>
          <p>Подписки на osu!support и уникальные турнирные бейджи в игровой профиль за крупные турниры!</p>
        </div>
        <div className="fame">
          <img src={play_osu_black} className="container-image" />
          <p>Войди в число сильнейших и получи возможность сыграть на более престижных турнирах с более высокими наградами!</p>
        </div>
      </div>
    </div>
  )
}
