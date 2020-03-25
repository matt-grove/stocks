import React, {useState, useEffect} from 'react'

import Header from './header'
import Sidebar from './sidebar'
import Content from './content'

import '../styles/main.css'
import '../styles/color.css'

import apiRequest from '../services/request'
import apiStringify from '../services/apiStringify'
import filterByDate from '../services/dateFilter'
import calculatePrice from '../services/calculatePrice'

import AlphaData from '../data/alpha'
import apiSchema from '../data/apiSchema'
import stocks from '../data/stocks'


const Main = () => {

  const key = process.env.REACT_APP_STOCKS_API_KEY
  const [darkMode, setDarkMode] = useState(false)
  const [name, setName] = useState( {short: stocks[0].short, long: stocks[0].long} )
  const [price, setPrice] = useState( {close: '', change: ''} )
  const [apiString, setApiString] = useState( apiStringify(name.short, key, apiSchema[0]) )
  const [timeSeries, setTimeSeries] = useState( {data: null,
                                                active: apiSchema[0],
                                                options: apiSchema,
                                                initialData: null} )


  useEffect(() => {
    const asyncContainer = async () => {
      const data = await apiRequest(apiString)
      // const data = AlphaData
      setTimeSeries({data: data,
                     options: apiSchema,
                     active: apiSchema[0],
                     initialData: data})
      setPrice(calculatePrice(data))
    }
    asyncContainer()
  }, [])

  const handleTimePeriod = async (currentSelection) => {
    if (timeSeries.options.id === currentSelection.id) { console.log('no changes')}
    else {
      const inputData = await apiRequest(apiStringify(name.short, key, currentSelection))
      let tsOptions = [...timeSeries.options]
      tsOptions = tsOptions.map(d => {
        (d.id=== currentSelection.id) ? d.active = true: d.active = false
        return d
      })
      setTimeSeries({data: inputData,
                     active: currentSelection,
                     options: tsOptions,
                     initialData: timeSeries.initialData})
    }
  }

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  const handleActiveStock = (name) => {
    handleTimePeriod(timeSeries.active)
    setName({short: name.short, long: name.long})
  }

  const filteredData = filterByDate(timeSeries.data, timeSeries.active)

  return (
    <div className={(darkMode) ? 'dark-mode' : 'light-mode'}>
      <Header
        handleDarkMode={ handleDarkMode }/>
      <Sidebar
        stocks={ stocks }
        active={ name }
        price={ price }
        handleActiveStock={ handleActiveStock }/>
      <Content
        timeSeriesData={ filteredData }
        timeSeriesActive={ timeSeries.active }
        timeSeriesOptions={ timeSeries.options }
        handleTimePeriod={ handleTimePeriod }
        price={ price }
        name={ name }/>
    </div>
  )
}



export default Main
