import React from 'react'
import PropTypes from 'prop-types'
import { ResponsiveLine } from '@nivo/line'
import staticProperties from '../data/timeSeriesOptions'
import '../styles/timeSeries.css'



const TimeSeries = (props) => {

  const { alphaData, handleOptions } = props

  return (
    <div className='cell cw-2 ch-1 c-double'>
    <div className='plot-container'>
      { alphaData === null ?
        <h1 className='white'>loading...</h1> :
          <>
            <ResponsiveLine
              data={ alphaData }
              {...staticProperties} />
            <button onClick={() => handleOptions() }>1D</button>
            <button>1W</button>
            <button>1M</button>
            <button>3M</button>
            <button>1Y</button>
          </>
      }
    </div>
  </div>
  )
}

TimeSeries.propTypes = {
  alphaData: PropTypes.array,
  handleOptions: PropTypes.func.isRequired
}

export default TimeSeries;
