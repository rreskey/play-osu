import React, { useEffect } from 'react'
import '../App.css'  

export function Home() {
    useEffect(() => {
        const links = document.querySelectorAll('li')
        links.forEach(item => {
            item.classList.remove('active')
        })
      }, [])

    return (
        <div className="content-area home">
            <div className="row row-one">
                <h2>Турниры по osu!</h2>
                <p>Это новые возможности и новые знакомства</p>
                <a className='btn-link' href='#'>Заходи в наш discord!</a>
            </div>
            <div className="row row-two">
                <h2>Изучи меню</h2>
                <p>Узнай, где ты можешь сыграть и посмотреть турниры!</p>
            </div>
        </div>
    )
}
