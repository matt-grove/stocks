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

import timePeriods from '../data/apiSchema'
import stocks from '../data/stocks'


const Main = () => {

  const [data, setData] = useState(null)
  const [price, setPrice] = useState({ close: '', change: '' })

  const [darkMode, setDarkMode] = useState(false)

  const [timePeriod, setTimePeriod] = useState(timePeriods[0])
  const [stockName, setStockName] = useState({ short: stocks[0].short, long: stocks[0].long })

  const key = process.env.REACT_APP_STOCKS_API_KEY




  useEffect(() => {
    console.log('useEffect Called')
    const asyncContainer = async () => {
      const apiData = await apiRequest(apiStringify(stockName.short, key, timePeriod))
      if (timePeriod.id === timePeriods[0].id) {
        setPrice(calculatePrice(apiData))
      }
      setData(filterByDate(apiData, timePeriod))
    }
    asyncContainer()
  }, [key, stockName, timePeriod])




  const handleTimePeriod = (currentSelection) => {
    if (timePeriod.id === currentSelection.id) {
      console.log('No Changes Necessary')
      return
    }
    setData(null)
    setTimePeriod(currentSelection)

  }

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const handleActiveStock = (name) => {
    setTimePeriod(timePeriods[0])
    setData(null)
    setPrice( { close: '', change: '' } )
    setStockName({ short: name.short, long: name.long })
  }



  return (
    <div className={(darkMode) ? 'dark-mode transition' : 'light-mode transition'}>
      <Header
        handleDarkMode={ handleDarkMode }/>

      <Sidebar
        stocks={ stocks }
        activeStock={ stockName }
        price={ price }
        setActiveStock={ handleActiveStock }/>

      <Content
        timeSeriesData={ data }
        timePeriod={ timePeriod }
        setTimePeriod={ handleTimePeriod }
        price={ price }
        activeStock={ stockName }/>
    </div>
  )
}



export default Main
