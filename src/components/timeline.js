import React from 'react'
import PropTypes from 'prop-types'
import { ResponsiveLine } from '@nivo/line'
import staticProperties from '../data/timeSeriesOptions'



const Timeline = (props) => {
  const {alphaData} = props
  return (
    <div className='plot-container-wrapper'>
      <div className='plot-container'>
        <ResponsiveLine
          data={ alphaData }
          { ...staticProperties } />
      </div>
    </div>
  )
}

Timeline.propTypes = {
  alphaData: PropTypes.array.isRequired
}

export default Timeline;
