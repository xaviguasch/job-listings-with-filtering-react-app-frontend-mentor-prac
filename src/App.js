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

  // const filteredData = data.filter(
  //   (el) => filterFields.includes(el.role) || filterFields.includes(el.position)
  // )

  const getObjectValues = (obj) =>
    obj && typeof obj === 'object'
      ? Object.values(obj).map(getObjectValues).flat()
      : [obj]

  const filteredData = data
    .map((obj) => getObjectValues(obj))
    .filter((collection) => {
      if (filterFields.length > 0) {
        const checker = (collection, filterFields) => {
          return filterFields.every((v) => collection.includes(v))
        }
        return checker(collection, filterFields)
      } else {
        return collection
      }
    })

  console.log(filteredData)

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
