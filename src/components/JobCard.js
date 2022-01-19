import React from 'react'

import './JobCard.css'

const JobCard = ({ data }) => {
  const {
    company,
    logo,
    new: newBinary,
    featured,
    position,
    postedAt,
    contract,
    location,
  } = data
  return (
    <div className='JobCard'>
      <div className='upper'>
        <span className='company-name'>{company}</span>
        {newBinary && <span className='tag tag--new'>new!</span>}
        {featured && <span className='tag tag--featured'>featured</span>}
      </div>
      <h2>{position}</h2>
      <div className='lower'>
        <span className='additional'>{postedAt}</span>
        <span className='additional'>{contract}</span>
        <span className='additional'>{location}</span>
      </div>
      <img src={process.env.PUBLIC_URL + logo} alt='logo' />{' '}
    </div>
  )
}

export default JobCard
