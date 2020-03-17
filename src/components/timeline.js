import React from 'react'
import PropTypes from 'prop-types'
import { ResponsiveLine } from '@nivo/line'
import staticProperties from '../data/timeSeriesOptions'
import convertData from '../services/convertData'



const Timeline = (props) => {
  const { timeSeriesData, timeSeriesActive } = props

  const convertedData = convertData(timeSeriesData, timeSeriesActive)


  return (
      <div className='plot-container'>
        <ResponsiveLine
          data={ convertedData }
          { ...staticProperties } />
      </div>
  )
}

Timeline.propTypes = {
  timeSeriesData: PropTypes.object.isRequired,
}

export default Timeline;
