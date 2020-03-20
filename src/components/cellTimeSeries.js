import React from 'react'
import PropTypes from 'prop-types'
import TimeSelection from './timeSelector'
import TimeLine from './timeline'
import TimeText from './timeText'
import '../styles/timeSeries.css'

const TimeSeries = (props) => {
  const { timeSeriesData, timeSeriesActive, timeSeriesOptions, handleTimePeriod, price } = props

  return (
    <div className='cell cw-2 ch-1 c-double no-highlight'>
      {
        timeSeriesData === null ?
        <div className='time-placeholder-wrapper'>
          <h3 className='grey5-text time-placeholder'>loading...</h3>
        </div> :
        <div className='time-container'>
          <div className='time-main-content'>
            <TimeText price={ price }/>
            <TimeLine
              timeSeriesData={ timeSeriesData }
              timeSeriesActive={ timeSeriesActive }/>
          </div>
          <TimeSelection
            handleTimePeriod={ handleTimePeriod }
            timeSeriesOptions={ timeSeriesOptions }/>
        </div>
      }
    </div>
  )
}

TimeSeries.propTypes = {
  timeSeriesData: PropTypes.object,
  timeSeriesOptions: PropTypes.array,
  timeSeriesActive: PropTypes.object,
  handleTimePeriod: PropTypes.func.isRequired,
  price: PropTypes.object.isRequired
}

export default TimeSeries
