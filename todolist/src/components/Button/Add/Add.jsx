import React from 'react'
import Modify from '../Modify/Modify';


const Add = ({newTask, setNewTask, setSampleGoals, sampleGoals, indexEditing, setModify}) => {
    
    const handleClick = () => {
        if (indexEditing !== null && indexEditing !== undefined) {
            const updatedGoals = [...sampleGoals];
            updatedGoals[indexEditing] = newTask;
            setSampleGoals(updatedGoals);
            setModify(false);
            
        } else {
            setSampleGoals([...sampleGoals, newTask]);
        }
    };

  return (
    <>
        <div className="add-container">
            <input
                className='add-input'
                type="text"
                placeholder= {newTask ? newTask : "Ajouter une nouvelle tâche"}
                onChange={(e) => {
                    setNewTask(e.target.value);
                }}>
            </input>
            <button className="add-goal-button" onClick={() => handleClick()}>
                {indexEditing !== null && indexEditing !== undefined ? "Modifier" : "Add"}
            </button>
        </div>
    </>
  )
}

export default Add
