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

  const [data, setData] = useState(null)
  const [price, setPrice] = useState({ close: '', change: ''})

  const [darkMode, setDarkMode] = useState(false)

  const [timePeriod, setTimePeriod] = useState(apiSchema[0])
  const [stockName, setStockName] = useState({ short: stocks[0].short, long: stocks[0].long })

  const key = process.env.REACT_APP_STOCKS_API_KEY




  useEffect(() => {
    const asyncContainer = async () => {
      const data = await apiRequest(apiStringify(stockName.short, key, timePeriod))
      setData(data)
      setPrice(calculatePrice(data))
    }
    asyncContainer()
  }, [stockName, timePeriod])




  const handleTimePeriod = async (currentSelection) => {
    // if (timePeriod.id === currentSelection.id) { console.log('no changes')}
    // else {
    //   const inputData = await apiRequest(apiStringify(stockName.short, key, currentSelection))
    //   let tsOptions = [...timeSeries.options]
    //   tsOptions = tsOptions.map(d => {
    //     (d.id=== currentSelection.id) ? d.active = true: d.active = false
    //     return d
    //   })
    //   setTimeSeries({data: inputData,
    //                  active: currentSelection,
    //                  options: tsOptions,
    //                  initialData: timeSeries.initialData})
    // }
  }

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  const handleActiveStock = (name) => {
    // handleTimePeriod(timeSeries.active)
    setStockName({ short: name.short, long: name.long })
  }

  const filteredData = filterByDate(data, timePeriod)

  return (
    <div className={(darkMode) ? 'dark-mode' : 'light-mode'}>
      <Header
        handleDarkMode={ handleDarkMode }/>

      <Sidebar
        stocks={ stocks }
        active={ stockName }
        price={ price }
        handleActiveStock={ handleActiveStock }/>

      <Content
        timeSeriesData={ filteredData }
        timeSeriesActive={ timePeriod }
        timeSeriesOptions={ apiSchema }
        handleTimePeriod={ handleTimePeriod }
        price={ price }
        name={ stockName }/>
    </div>
  )
}



export default Main
