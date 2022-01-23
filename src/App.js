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

  const clearFilterFields = () => {
    setFilterFields([])
  }

  // const filteredData = data.filter(
  //   (el) => filterFields.includes(el.role) || filterFields.includes(el.position)
  // )

  const getObjectValues = (obj) =>
    obj && typeof obj === 'object'
      ? Object.values(obj).map(getObjectValues).flat()
      : [obj]

  // const filteredData = data
  //   .map((obj) => {
  //     return getObjectValues(obj)
  //   })
  //   .filter((collection) => {
  //     if (filterFields.length > 0) {
  //       return filterFields.every((v) => collection.includes(v))
  //     } else {
  //       return collection
  //     }
  //   })
  // console.log(filteredData)

  function isObjectValid(collection) {
    if (filterFields.length > 0) {
      return filterFields.every((v) => collection.includes(v))
    } else {
      return false
    }
  }

  const finalData = data.filter((obj) => {
    if (filterFields.length === 0) {
      return obj
    } else {
      const objectByValues = getObjectValues(obj)

      if (isObjectValid(objectByValues)) {
        return obj
      }
    }
  })

  console.log(finalData)

  return (
    <div className='App'>
      <img className='header-svg' src='./images/bg-header-mobile.svg' alt='' />
      <ActiveFilterArea
        filterFields={filterFields}
        onRemoveFilterField={removeFilterField}
        onClearFilterFields={clearFilterFields}
      />

      {finalData.map((card) => (
        <JobCard key={card.id} data={card} onAddFilterField={addFilterField} />
      ))}
    </div>
  )
}

export default App
