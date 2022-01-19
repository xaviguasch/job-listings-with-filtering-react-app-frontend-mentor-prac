import './App.css'

import data from './data'

import JobCard from './components/JobCard'

function App() {
  return (
    <div className='App'>
      <h1>Job Listings App</h1>

      {data.map((card) => (
        <JobCard key={card.id} data={card} />
      ))}
    </div>
  )
}

export default App
