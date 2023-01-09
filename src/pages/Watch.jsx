import React from 'react'
import '../App.css'  
import logo_with_bg from '../assets/logo_with_bg.jpg'
import image1 from '../assets/gallery-1.png'
import image2 from '../assets/gallery-2.png'
import image3 from '../assets/gallery-3.png'
import image4 from '../assets/gallery-4.png'
import yt from '../assets/yt-1.png'

export function Watch() {
  return (
    <div className='content-area watch'>
      <div className='main-section'>
        <section className="section-hero">
          <img src={logo_with_bg} className='logo-bg'/>
          <div className="text">
            <h2>Смотри с удовольствием!</h2>
            <p>
              Мы постоянно изменяем дизайн наших турниров, чтобы ты мог не только в полной мере насладиться хорошей картинкой, но и во время просмотра без труда найти всю необходимую информацию о матче.
            </p>
            <h3>А посмотреть записи матчей ты всегда можешь на нашем YouTube-канале!</h3>
            <a href='https://www.youtube.com/channel/UChNf1_khGnxReYnDsU6B6uw' target='_blank' className='youtube-link'><img src={yt} alt='youtube link' /></a>
          </div>
        </section>
        <h3>Примеры работ</h3>
        <section className='gallery'>
          <div className="tournament">
            <img src={image1} alt='gallery image'/>
            <h4 className='tournament-title'>#ROC22</h4>
          </div>
          <div className="tournament">
            <img src={image2} alt='gallery image'/>
            <h4 className='tournament-title'>4CWC 2022</h4>
          </div>
          <div className="tournament">
            <img src={image3} alt='gallery image'/>
            <h4 className='tournament-title'>CTCT 4</h4>
          </div>
          <div className="tournament">
            <img src={image4} alt='gallery image'/>
            <h4 className='tournament-title'>ICCO 2022</h4>
          </div>
        </section>
      </div>
    </div>
  )
}
