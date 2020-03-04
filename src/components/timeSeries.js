import React, { useState, useEffect } from 'react';
import { ResponsiveLine } from '@nivo/line';
import '../styles/timeSeries.css';
import convertData from '../services/convertData';
import lineProperties from './timeSeriesInfo';
// import apiRequest from '../services/request';
import AlphaData from '../data/alpha';




const TimeSeries = (props) => {
  const [alphaData, setAlphaData] = useState(null);
  useEffect(() => {

    const runner = async () => {
      // const b = await apiRequest()
      // console.log(b)
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
          <>
            <ResponsiveLine data={ alphaData } {...lineProperties} />
            <button>1D</button>
            <button>1W</button>
            <button>1M</button>
            <button>3M</button>
            <button>1Y</button>
          </>
      }
    </div>
  )
}

export default TimeSeries;
