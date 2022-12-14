import './App.css'
import logo from "./assets/32.png"

function App() {

  return (
    <div className="wrapper css-selector">
      <div className='container--logo'>
      <button><span className="text-gradient">Побеждай</span></button>
        <div className='centered'>
          <button className='test3'><span className="text-gradient">Твори</span></button>
          <img src={logo} alt="logo" className='logo'/>
          <button className='test4'><span className="text-gradient">Смотри</span></button>
        </div>
      <button><span className="text-gradient">Играй</span></button>
      </div>
    </div>
  )
}

export default App
