import React from 'react'
import PropTypes from 'prop-types'

const TimeText = ({priceChange}) => {

  return (
    <div className='time-text'>
      <div className='time-text-row'>
        <h2>GPRO</h2>
        <div className='time-text-right'>
          <h3>{priceChange.close}</h3>
        </div>
      </div>
      <div className='time-text-row'>

        <div className='time-text-left'>
          <h4>GoPro, Inc.</h4>
        </div>

        <div className='time-text-right'>
          <h5>{priceChange.pct}</h5>
        </div>

      </div>
    </div>
  )
}

TimeText.propTypes = {
  priceChange: PropTypes.object.isRequired
}


export default TimeText
