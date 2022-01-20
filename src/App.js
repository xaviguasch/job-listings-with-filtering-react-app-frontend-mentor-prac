import React, { useState } from 'react'

import './App.css'

import data from './data'

import JobCard from './components/JobCard'

function App() {
  const [filterFields, setFilterField] = useState([])

  const addFilterField = (filterOption) => {
    if (!filterFields.includes(filterOption)) {
      setFilterField([...filterFields, filterOption])
    }
  }

  return (
    <div className='App'>
      <h1>Job Listings App</h1>

      {data.map((card) => (
        <JobCard key={card.id} data={card} onAddFilterField={addFilterField} />
      ))}
    </div>
  )
}

export default App
