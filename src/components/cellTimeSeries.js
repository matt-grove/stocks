import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TimeSelection from './timeSelector'
import TimeLine from './timeline'
import '../styles/timeSeries.css'
import apiSchema from '../data/apiSchema'

const TimeSeries = (props) => {
  const [currentSelection, setCurrentSelection] = useState(apiSchema)
  const { alphaData, handleOptions } = props
  return (
    <div className='cell cw-2 ch-1 c-double no-highlight'>
        { alphaData === null ? <h1>loading...</h1> :
        <div className='timeline-container'>
          <TimeLine alphaData={ alphaData }/>
          <TimeSelection currentSelection={ currentSelection }/>
        </div>}
    </div>
  )
}

TimeSeries.propTypes = {
  alphaData: PropTypes.array,
  handleOptions: PropTypes.func.isRequired
}

export default TimeSeries;
