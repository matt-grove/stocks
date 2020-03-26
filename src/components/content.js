import React from 'react'
import PropTypes from 'prop-types'
import PieChart from './cellPieChart'
import TimeSeries from './cellTimeSeries'
import '../styles/cell.css'

const Content = (props) => {
  const { timeSeriesData, setTimePeriod, timePeriod, price, activeStock } = props



  return (
    <main className='content'>
      <div className='content-grid-container'>
        <div className='content-grid'>
          <TimeSeries
            timeSeriesData={ timeSeriesData }
            timePeriod={ timePeriod }
            setTimePeriod={ setTimePeriod }
            price={ price }
            activeStock={ activeStock }/>
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
  timePeriod: PropTypes.object.isRequired,
  setTimePeriod: PropTypes.func.isRequired,
  price: PropTypes.object.isRequired,
  activeStock: PropTypes.object.isRequired
}

export default Content
