import React, {useState, useEffect} from 'react'
import Header from './header'
import Sidebar from './sidebar'
import Content from './content'
import '../styles/main.css'
import convertData from '../services/convertData'
import apiRequest from '../services/request'
import apiStringify from '../services/apiStringify'
import AlphaData from '../data/alpha'
import apiSchema from '../data/apiSchema'



const Main = () => {

  const [timeSeries, setTimeSeries] = useState({data: null, options: apiSchema[0]})
  const key = process.env.REACT_APP_STOCKS_API_KEY
  const apiString = apiStringify('GPRO', key, apiSchema[0])

  useEffect(() => {
    const asyncContainer = async () => {
      // const data = await apiRequest(apiString)
      const data = AlphaData
      setTimeSeries({data: data, options: apiSchema[0]})
    }
    asyncContainer()

  }, [])

  const handleOptions = async (options) => {
    console.log('yesssss')
    const inputData = await apiRequest(apiSchema[1])
    setTimeSeries({data: inputData, options: apiSchema[1]})
  }

  const convertedData = convertData(timeSeries.data, timeSeries.options)
  return (
    <>
      <Header/>
      <Sidebar/>
      <Content
        alphaData={convertedData}
        handleOptions={handleOptions}/>
    </>
  )
}



export default Main
