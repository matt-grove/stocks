import React, {useState, useEffect} from 'react'

import Header from './header'
import Sidebar from './sidebar'
import Content from './content'

import convertData from '../services/convertData'
import apiRequest from '../services/request'

import AlphaData from '../data/alpha'
import apiSchema from '../data/apiSchema'

import '../styles/main.css'



const Main = () => {

  const [timeSeries, setTimeSeries] = useState({data: null, options: apiSchema[0]})

  useEffect(() => {
    const asyncContainer = async () => {
      // const data = await apiRequest(apiSchema[0])
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
  console.log(convertedData)

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
