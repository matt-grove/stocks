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
  const [apiString] = useState(apiStringify('GPRO', key, apiSchema[0]))
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


  const handleTimePeriod = async (currentSelection) => {
    if (timeSeries.options.id === currentSelection.id) return
    const inputData = await apiRequest(apiStringify('GPRO', key, currentSelection))
    console.log(inputData)
    let tsOptions = [...timeSeries.options]
    tsOptions = tsOptions.map(d => {
      (d.id=== currentSelection.id) ? d.active = true: d.active = false
      return d;
    })
    setTimeSeries({data: inputData, active: currentSelection, options: tsOptions})
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
