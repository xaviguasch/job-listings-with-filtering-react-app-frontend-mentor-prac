import React, { useState } from 'react'

import './App.css'

import data from './data'

import ActiveFilterArea from './components/ActiveFilterArea'
import JobCard from './components/JobCard'

function App() {
  const [filterFields, setFilterFields] = useState([])

  const addFilterField = (filterOption) => {
    if (!filterFields.includes(filterOption)) {
      setFilterFields([...filterFields, filterOption])
    }
  }

  const removeFilterField = (filterClicked) => {
    setFilterFields(filterFields.filter((ff) => ff !== filterClicked))
  }

  return (
    <div className='App'>
      <ActiveFilterArea
        filterFields={filterFields}
        onRemoveFilterField={removeFilterField}
      />

      {data.map((card) => (
        <JobCard key={card.id} data={card} onAddFilterField={addFilterField} />
      ))}
    </div>
  )
}

export default App
