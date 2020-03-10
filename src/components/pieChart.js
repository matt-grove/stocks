import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import pieProperties from '../data/pieChartOptions';
import pieData from '../data/pie';
import '../styles/pieChart.css';

const PieChart = (props) => {
  return (
    <div className='cell ch-1'>
      <div className='plot-container'>
        <ResponsivePie data={ pieData } { ...pieProperties }/>
        <h1>3.8%</h1>
      </div>
    </div>
  )
}

export default PieChart;
