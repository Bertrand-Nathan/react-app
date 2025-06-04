import { useState } from 'react'

import './App.css'

import Add from './components/Button/Add/Add.jsx'
import Remove from './components/Button/Remove/Remove.jsx';
import Modify from './components/Button/Modify/Modify.jsx';

function App() {
  
  const [sampleGoals, setSampleGoals] = useState([
  "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon"
  ]);

  const [newTask, setNewTask] = useState('');

  return (
    <>
    <h1>Mes objectifs</h1>
      {sampleGoals.map((goal, index) => (
        <div key={index} className="goal-item">
          <h3>{goal}</h3>
          <div className='button-container'>
            <Remove setSampleGoals={setSampleGoals} sampleGoals={sampleGoals} index={index} />
            <Modify setNewTask={setNewTask} newTask={newTask} setSampleGoals={setSampleGoals} sampleGoals={sampleGoals} indexToEditing={index}/>
          </div>
        </div>
      ))}

      <Add newTask={newTask} setNewTask={setNewTask} sampleGoals={sampleGoals} setSampleGoals={setSampleGoals} />
    </>
  )
}

export default App
