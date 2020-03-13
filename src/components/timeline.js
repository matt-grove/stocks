import React from 'react'
import PropTypes from 'prop-types'
import { ResponsiveLine } from '@nivo/line'
import staticProperties from '../data/timeSeriesOptions'



const Timeline = (props) => {
  const { timeSeriesData } = props
  console.log(timeSeriesData)
  return (
    <div className='plot-container-wrapper'>
      <div className='plot-container'>
        <ResponsiveLine
          data={ timeSeriesData }
          { ...staticProperties } />
      </div>
    </div>
  )
}

Timeline.propTypes = {
  timeSeriesData: PropTypes.array.isRequired
}

export default Timeline;
