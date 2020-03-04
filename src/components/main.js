import React, { useState, useEffect } from 'react'
// import PieChart from './pieChart'
import TimeSeries from './timeSeries'

import convertData from '../services/convertData'
import apiRequest from '../services/request'

import AlphaData from '../data/alpha'
import apiSchema from '../data/apiSchema'

const Main = () => {

  const [timeSeries, setTimeSeries] = useState({data: null, options: apiSchema[0]})

  useEffect(() => {
    const asyncContainer = async () => {
      const data = await apiRequest(apiSchema[0])
      // const outputData = convertData(AlphaData, timeSeries.options)
      setTimeSeries({data: data, options: apiSchema[0]})
    }
    asyncContainer()

    },
  [])






  const handleOptions = async (options) => {
    console.log('yesssss')
    const inputData = await apiRequest(apiSchema[1])
    const outputData = convertData(inputData, apiSchema[1])
    setTimeSeries({data: inputData, options: apiSchema[1]})
  }



  const convertedData = convertData(timeSeries.data, timeSeries.options)
  console.log(convertedData)

  return (
    <TimeSeries
      alphaData={ convertedData }
      handleOptions={ handleOptions }/>
  )
}

export default Main
