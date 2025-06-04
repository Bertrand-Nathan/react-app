import React from 'react'

const Remove = ({setSampleGoals, sampleGoals, index}) => {
  return (
    <button
            className="remove-goal-button"
            onClick={() => {
              setSampleGoals(sampleGoals.filter((_, i) => i !== index));
            }}
          >
            🗑️
    </button>
  )
}

export default Remove
