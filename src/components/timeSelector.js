import React from 'react'
import PropTypes from 'prop-types'
import allTimePeriods from '../data/apiSchema'



const TimeSelection = (props) => {

  const  { timePeriod, setTimePeriod } = props

  const buttonCollection = allTimePeriods.map(t => {
    return (
      <div
        key={t.id}
        onClick={() => setTimePeriod(t)}
        className={ (t.id === timePeriod.id) ?
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

TimeSelection.propTypes = {
  setTimePeriod: PropTypes.func.isRequired,
  timePeriod: PropTypes.object.isRequired
}

export default TimeSelection
