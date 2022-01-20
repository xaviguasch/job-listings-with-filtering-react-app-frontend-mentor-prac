import React from 'react'

import './ActiveFilterArea.css'

const ActiveFilterArea = ({ filterFields, onRemoveFilterField }) => {
  const handleRemoveClick = (e) => {
    onRemoveFilterField(e.target.name)
  }

  return (
    <div className='ActiveFilterArea'>
      <h2>Active Filter</h2>

      {filterFields.map((field) => (
        <div key={field}>
          <p>{field}</p>
          <button onClick={handleRemoveClick} name={field}>
            X
          </button>
        </div>
      ))}
    </div>
  )
}

export default ActiveFilterArea
