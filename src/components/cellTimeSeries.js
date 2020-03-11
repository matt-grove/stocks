import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TimeSelection from './timeSelector'
import TimeLine from './timeline'
import TimeText from './timeText'
import '../styles/timeSeries.css'
import apiSchema from '../data/apiSchema'

const TimeSeries = (props) => {
  const [currentSelection] = useState(apiSchema)
  const { alphaData } = props

  return (
    <div className='cell cw-2 ch-1 c-double no-highlight'>

      { alphaData === null ?

        <div className='time-placeholder-wrapper'>
          <h3 className='grey5-text time-placeholder'>loading...</h3>
        </div> :

        <div className='timeline-container'>
          <TimeText/>
          <TimeLine alphaData={ alphaData }/>
          <TimeSelection currentSelection={ currentSelection }/>
        </div>
      }


    </div>
  )
}

TimeSeries.propTypes = {
  alphaData: PropTypes.array,
  handleOptions: PropTypes.func.isRequired
}

export default TimeSeries;
