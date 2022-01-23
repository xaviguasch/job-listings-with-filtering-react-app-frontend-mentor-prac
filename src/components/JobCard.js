import React from 'react'

import './JobCard.css'

const JobCard = ({ data, onAddFilterField }) => {
  const {
    company,
    logo,
    new: newBinary,
    featured,
    position,
    postedAt,
    contract,
    location,
    role,
    languages,
    tools,
    level,
  } = data

  const sendFilterField = (e) => {
    onAddFilterField(e.target.name)
  }

  return (
    <div className='JobCard card'>
      {/* Do we need the process.env.PUBLIC_URL?????? */}
      {/* <img className='logo' src={process.env.PUBLIC_URL + logo} alt='logo' />{' '} */}
      <img className='logo' src={logo} alt='logo' />{' '}
      <div className='info-block'>
        <div className='upper'>
          <span className='company-name'>{company}</span>
          <div className='tags'>
            {newBinary && <span className='tag tag--new'>new!</span>}
            {featured && <span className='tag tag--featured'>featured</span>}
          </div>
        </div>
        <h2 className='position'>{position}</h2>
        <div className='lower'>
          <span className='additional'>{postedAt}</span>

          <span className='additional'>{contract}</span>

          <span className='additional'>{location}</span>
        </div>
      </div>
      <div className='buttons-area'>
        <button className='btn' onClick={sendFilterField} name={role}>
          {role}
        </button>
        <button className='btn' onClick={sendFilterField} name={level}>
          {level}
        </button>
        {languages.map((lang) => (
          <button className='btn' onClick={sendFilterField} key={lang} name={lang}>
            {lang}
          </button>
        ))}
        {tools.map((tool) => (
          <button className='btn' onClick={sendFilterField} key={tool} name={tool}>
            {tool}
          </button>
        ))}
      </div>
    </div>
  )
}

export default JobCard
