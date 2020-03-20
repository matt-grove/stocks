import React from 'react'
import PropTypes from 'prop-types'
import PieChart from './cellPieChart'
import TimeSeries from './cellTimeSeries'
import '../styles/cell.css'

const Content = (props) => {
  const { timeSeriesData, handleTimePeriod, timeSeriesActive, timeSeriesOptions, price } = props

  return (
    <main className='content'>
      <div className='content-grid-container'>
        <div className='content-grid'>
          <TimeSeries
            timeSeriesData={ timeSeriesData }
            timeSeriesActive={ timeSeriesActive }
            handleTimePeriod={ handleTimePeriod }
            timeSeriesOptions={ timeSeriesOptions }
            price={ price }/>
          <div className='cell ch-1'></div>
          <PieChart/>
          <div className='cell ch-1'></div>
          <div className='cell'></div>
          <div className='cell'></div>
          <div className='cell ch-1'></div>
        </div>
      </div>
    </main>
  )
}

Content.propTypes = {
  timeSeriesData: PropTypes.object,
  timeSeriesActive: PropTypes.object,
  timeSeriesOptions: PropTypes.array,
  handleTimePeriod: PropTypes.func.isRequired,
  price: PropTypes.object.isRequired
}

export default Content
