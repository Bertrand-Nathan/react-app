import React from 'react'
import { useNavigate } from 'react-router';


const Sidebar = ({setVille, ville }) => {
    const navigate = useNavigate();
    
    const handleOnClick = () => {
        navigate('/city');
    };
   
    

    return (
        <div className='sidebar'>
            <div className='sidebar-links'>
                <h2>Menu</h2>
                <a href='/'>Météo du jour</a>
                <a href='/fiveDays'>Météo sur 5 jours</a>
            </div>
            <div className='sidebar-search'>
                <h2>Rechercher une ville</h2>
                
                <input
                    type='text'
                    placeholder='Entrez une ville'
                    value={ville}
                    onChange={(e) => setVille(e.target.value)}
                />
                <button onClick={handleOnClick}>Rechercher</button>
                
            </div>
        </div>
    )
}

export default Sidebar
