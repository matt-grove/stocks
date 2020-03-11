import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import pieProperties from '../data/pieChartOptions'
import pieData from '../data/pie'
import '../styles/pieChart.css'

const PieChart = (props) => {
  return (
    <div className='cell ch-1'>
      <div className='pie-info-container'>
        <div className='pie-info'>
          <h1 className='pie-h1'>3.8%</h1>
          <h4 className="pie-h4">of 6% Goal Reached</h4>
          <h5 className="pie-h5 grey4-text">3.90/3.98</h5>
        </div>
      </div>
      <div className='pie-container'>
        <div className='pie-plot-container'>
          <ResponsivePie data={ pieData } { ...pieProperties }/>
        </div>
      </div>
    </div>
  )
}

export default PieChart
