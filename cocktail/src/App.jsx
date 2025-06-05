import React, {useState} from 'react'
import { Routes, Route, BrowserRouter } from 'react-router'
import Home from './features/home';
import './App.css'
import Details from './features/details';
import Navbar from './components/navbar';
import CocktaiByCategory from './features/cocktaiByCategory';

function App() {
  const [dataCocktail, setDataCocktail] = useState(null);
  
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home dataCocktail={dataCocktail} setDataCocktail={setDataCocktail}/>} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/filter/:slug" element={<CocktaiByCategory />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
