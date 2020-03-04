import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import staticProperties from '../data/timeSeriesOptions';
import '../styles/timeSeries.css';



const TimeSeries = (props) => {



  return (
    <div className='plot-container'>
      { props.alphaData === null ?
        <h1 className='white'>loading...</h1> :
          <>
            <ResponsiveLine
              data={ props.alphaData }
              {...staticProperties} />
            <button onClick={() => props.handleOptions() }>1D</button>
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
