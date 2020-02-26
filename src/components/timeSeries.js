import React, { useState, useEffect } from 'react';
import { ResponsiveLine } from '@nivo/line';
import '../styles/timeSeries.css';
import convertData from '../services/convertData';
import request from '../services/request';
import AlphaData from '../data/alpha';
import { timeSeriesInfo, getColor} from './timeSeriesInfo';
import { linearGradientDef } from '@nivo/core'


const TimeSeries = (props) => {

  const [alphaData, setAlphaData] = useState(null);

  useEffect(() => {
    const runner = async () => {
      const a = await convertData(AlphaData);
      setAlphaData(a);
    }
    runner();
    },
  []);


  return (
    <div className='plot-container'>

      { alphaData === null ? <h1 className='white'>loading...</h1> :

        <ResponsiveLine
         data={ alphaData }
         margin={ timeSeriesInfo.margin }
         yScale={ timeSeriesInfo.yScale }
         lineWidth={ timeSeriesInfo.lineWidth }
         enableArea={ timeSeriesInfo.enableArea }
         enablePoints={ timeSeriesInfo.enablePoints }
         enableGridX={ timeSeriesInfo.enableGridX }
         enableGridY={ timeSeriesInfo.enableGridY }
         enableSlices={ timeSeriesInfo.enableSlices }
         isInteractive={ timeSeriesInfo.isInteractive }
         xScale={ timeSeriesInfo.xScale }
         axisBottom={ timeSeriesInfo.axisBottom }
         colors={ getColor }
         defs={ timeSeriesInfo.defs }
         fill={ timeSeriesInfo.fill }

         />
      }

    </div>
  )
}

export default TimeSeries;
