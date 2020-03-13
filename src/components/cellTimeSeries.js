import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TimeSelection from './timeSelector'
import TimeLine from './timeline'
import TimeText from './timeText'
import '../styles/timeSeries.css'
import apiSchema from '../data/apiSchema'


const TimeSeries = (props) => {
  const { timeSeriesData, timeSeriesActive, timeSeriesOptions, handleTimePeriod } = props

  return (
    <div className='cell cw-2 ch-1 c-double no-highlight'>

      { timeSeriesData === null ?

        <div className='time-placeholder-wrapper'>
          <h3 className='grey5-text time-placeholder'>loading...</h3>
        </div> :

        <div className='timeline-container'>
          <TimeText/>
          <TimeLine
            timeSeriesData={ timeSeriesData }/>
          <TimeSelection
            handleTimePeriod={ handleTimePeriod }
            timeSeriesActive={ timeSeriesActive }
            timeSeriesOptions={ timeSeriesOptions }/>
        </div>
      }

    </div>
  )
}

TimeSeries.propTypes = {
  timeSeriesData: PropTypes.array,
  timeSeriesOptions: PropTypes.array,
  timeSeriesActive: PropTypes.object,
  handleTimePeriod: PropTypes.func.isRequired
}

export default TimeSeries;
