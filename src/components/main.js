import React, {useState, useEffect} from 'react'
import Header from './header'
import Sidebar from './sidebar'
import Content from './content'
import '../styles/main.css'
import convertData from '../services/convertData'
import apiRequest from '../services/request'
import apiStringify from '../services/apiStringify'
import dateFilter from '../services/dateFilter'
import AlphaData from '../data/alpha'
import apiSchema from '../data/apiSchema'



const Main = () => {

  const key = process.env.REACT_APP_STOCKS_API_KEY
  const apiString = apiStringify('GPRO', key, apiSchema[0])

  const [timeSeries, setTimeSeries] = useState({data: null,
                                                active: apiSchema[0],
                                                options: apiSchema})

  useEffect(() => {
    const asyncContainer = async () => {
      const data = await apiRequest(apiString)
      // const data = AlphaData
      setTimeSeries({data: data, options: apiSchema, active: apiSchema[0]})
    }
    asyncContainer()

  }, [])


  const handleTimePeriod = async (options) => {
    console.log("Time Period Toggled")
    const inputData = await apiRequest(apiStringify('GPRO', key, apiSchema[1]))
    const tsOptions = [...timeSeries.options]
    console.log(tsOptions)
    setTimeSeries({data: inputData, active: apiSchema[1], options: apiSchema})
  }



  const filteredData = dateFilter(timeSeries.data, timeSeries.active)
  const convertedData = convertData(filteredData, timeSeries.active)


  return (
    <>
      <Header/>
      <Sidebar/>
      <Content
        timeSeriesData={ convertedData }
        timeSeriesActive={ timeSeries.active }
        timeSeriesOptions={ timeSeries.options }
        handleTimePeriod={ handleTimePeriod }/>
    </>
  )
}



export default Main
