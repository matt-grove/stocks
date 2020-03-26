import React from 'react'
import PropTypes from 'prop-types'
import TimeSelection from './timeSelector'
import TimeLine from './timeline'
import TimeText from './timeText'
import '../styles/timeSeries.css'

const TimeSeries = (props) => {
  const { timeSeriesData, timePeriod, setTimePeriod, price, activeStock } = props



  return (
    <div className='cell cw-2 ch-1 c-double no-highlight'>
      {
        timeSeriesData === null ?
        <div className='time-placeholder-wrapper'>
          <h3 className='grey5-text time-placeholder'>loading...</h3>
        </div> :
        <div className='time-container'>
          <div className='time-main-content'>
            <TimeText
              price={ price }
              activeStock={ activeStock }
              />
            <TimeLine
              timeSeriesData={ timeSeriesData }
              timePeriod={ timePeriod }/>
          </div>
          <TimeSelection
            timePeriod={ timePeriod }
            setTimePeriod={ setTimePeriod }/>
        </div>
      }
    </div>
  )
}

TimeSeries.propTypes = {
  timeSeriesData: PropTypes.object,
  timeSeriesActive: PropTypes.object,
  setTimePeriod: PropTypes.func.isRequired,
  price: PropTypes.object.isRequired,
  activeStock: PropTypes.object.isRequired
}

export default TimeSeries
