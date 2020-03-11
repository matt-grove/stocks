import React from 'react'
import PropTypes from 'prop-types'

const TimeSelection = ({currentSelection}) => {

  const buttonCollection = currentSelection.map(t => {
    return (
      <div key={t.id} className={ (t.active)? 'time-selector time-selector-selected': 'time-selector'}>
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
  currentSelection: PropTypes.array.isRequired
}

export default TimeSelection
