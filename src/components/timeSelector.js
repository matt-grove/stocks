import React from 'react'
import PropTypes from 'prop-types'

const TimeSelection = ({ handleTimePeriod, timeSeriesActive, timeSeriesOptions}) => {
  const buttonCollection = timeSeriesOptions.map(t => {
    return (
      <div
        key={t.id}
        onClick={() => handleTimePeriod(t)}
        className={
          (t.active)?
          'time-selector time-selector-selected':
          'time-selector'}>
        <h5 className='grey3-text time-selector-content'>{t.id}</h5>
      </div>
    )
  })

  return (
    <div className='time-selection'>
     { buttonCollection }
    </div>
  )
}



export default TimeSelection
