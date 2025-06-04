import './App.css'
import React, { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router'
import MeteoDay from './Components/MeteoDay/meteoDay.jsx'
import FiveDays from './Components/FiveDays/fiveDays.jsx'
import MeteoCity from './Components/MeteoPays/meteoCity.jsx'
import Sidebar from './Components/Sidebar/sidebar.jsx'
function App() {
  const [meteoData, setMeteoData] = useState(null);
  const [ville, setVille] = useState('');
  return (
    <>
        <BrowserRouter>
          <Sidebar setMeteoData={setMeteoData} setVille={setVille}/>
          <div className='content'>
              <Routes>
                <Route path="/" element={<MeteoDay meteoData={meteoData} setMeteoData={setMeteoData} ville={ville}/>} />
                <Route path="/fivedays" element={<FiveDays meteoData={meteoData} setMeteoData={setMeteoData}/>} />
                <Route path="/city" element={<MeteoCity meteoData={meteoData} setMeteoData={setMeteoData} ville={ville}/>} />
              </Routes>
          </div>
        </BrowserRouter>
    </>
  )
}

export default App
