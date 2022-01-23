import React from 'react'

import './ActiveFilterArea.css'

const ActiveFilterArea = ({ filterFields, onRemoveFilterField, onClearFilterFields }) => {
  const handleRemoveClick = (e) => {
    onRemoveFilterField(e.target.name)
  }

  const handleClearClick = () => {
    onClearFilterFields()
  }

  if (filterFields.length === 0) {
    return <div></div>
  } else {
    return (
      <div className='ActiveFilterArea card'>
        <div className='filter-field-group'>
          {filterFields.map((field) => (
            <div className='filter-field' key={field}>
              <span>{field}</span>
              <button
                className='btn btn--filter-field'
                onClick={handleRemoveClick}
                name={field}
              >
                X
              </button>
            </div>
          ))}
        </div>

        <button className='btn btn--clear' onClick={handleClearClick}>
          Clear
        </button>
      </div>
    )
  }
}

export default ActiveFilterArea
