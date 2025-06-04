import React from 'react'
import Add from '../Add/Add';
import { useState } from 'react';

const Modify = ({setNewTask, newTask, sampleGoals, setSampleGoals, indexToEditing}) => {
    const [modify, setModify] = useState(false);

  return (
    <>
        <div className='modify-container'>
            <button className="modify-goal-button" onClick={() => setModify(!modify)}>
                ✏️
            </button>
        </div>
        {modify && (
            <div className='modify-input-container'>
                <Add newTask={newTask} setNewTask={setNewTask} setSampleGoals={setSampleGoals} sampleGoals={sampleGoals} indexEditing={indexToEditing} setModify={setModify}/>
            </div>
        )}
    </>
    
  )
}

export default Modify
