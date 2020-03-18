import React from 'react'
// import PropTypes from 'prop-types'

const TimeText = ({currentValue}) => {

  console.log(currentValue)


    const current = {}
    current.close = Number(currentValue[0]['4. close']).toFixed(2)
    current.pct = ((Number(currentValue[0]['4. close']) / Number(currentValue[1]['1. open'])) -1).toFixed(2)



  return (
    <div className='time-text'>
      <div className='time-text-row'>
        <h2>GPRO</h2>
        <div className='time-text-right'>
          <h3>{current.close}</h3>
        </div>
      </div>
      <div className='time-text-row'>

        <div className='time-text-left'>
          <h4>GoPro, Inc.</h4>
        </div>

        <div className='time-text-right'>
          <h5>{current.pct}</h5>
        </div>

      </div>
    </div>
  )
}

export default TimeText
