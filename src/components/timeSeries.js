import React, { useState, useEffect } from 'react';
import { ResponsiveLine } from '@nivo/line';
import '../styles/timeSeries.css';
import convertData from '../services/convertData';
import lineProperties from './timeSeriesInfo';
import apiRequest from '../services/request';
import AlphaData from '../data/alpha';

const TimeSeries = () => {
  const [alphaData, setAlphaData] = useState(null);
  useEffect(() => {
    const runner = async () => {
      const a = await convertData(AlphaData);
      setAlphaData(a);
    }
    runner();
    },
  []
  );

  return (
    <div className='plot-container'>
      { alphaData === null ?
        <h1 className='white'>loading...</h1> :
        <ResponsiveLine data={ alphaData } {...lineProperties} />
      }
    </div>
  )
}

export default TimeSeries;
