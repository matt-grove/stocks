import React from 'react'
import PropTypes from 'prop-types'
import PieChart from './cellPieChart'
import TimeSeries from './cellTimeSeries'
import '../styles/cell.css'

const Content = (props) => {
  const { alphaData, handleOptions } = props

  return (
    <main className='content'>
      <div className='content-grid-container'>
        <div className='content-grid'>
          <TimeSeries alphaData={alphaData} handleOptions={handleOptions}/>
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
  alphaData: PropTypes.array,
  handleOptions: PropTypes.func.isRequired
}

export default Content
