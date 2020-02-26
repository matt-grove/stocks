import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import pieProperties from './pieChartInfo';
import pieData from '../data/pie';
import '../styles/pieChart.css';

const PieChart = (props) => {
  return (
    <div className='plot-container'>
      <ResponsivePie data={ pieData } { ...pieProperties }/>
    </div>
  )
}

export default PieChart;
