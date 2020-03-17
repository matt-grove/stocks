import React from 'react'
// import PropTypes from 'prop-types'

const TimeText = ({currentValue}) => {

  console.log(currentValue['4. close'])


    const current = {}
    current.close = Number(currentValue['4. close']).toFixed(2)
    current.pct = ((Number(currentValue['4. close']) / Number(currentValue['1. open'])) -1).toFixed(2)



  return (
    <div className='timeline-text'>
      <div className='timeline-text-row'>
        <h2 >GPRO</h2>
        <h3>{current.close}</h3>
      </div>
      <div className='timeline-text-row'>
        <h4>GoPro, Inc.</h4>
        <h5>{current.pct}</h5>
      </div>
    </div>
  )
}

export default TimeText
