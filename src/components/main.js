import React, {useState, useEffect} from 'react'
import Header from './header'
import Sidebar from './sidebar'
import Content from './content'
import '../styles/main.css'
import apiRequest from '../services/request'
import apiStringify from '../services/apiStringify'
import filterByDate from '../services/dateFilter'
import AlphaData from '../data/alpha'
import apiSchema from '../data/apiSchema'



const Main = () => {

  const initialTimeStep = "Time Series (5min)"

  const key = process.env.REACT_APP_STOCKS_API_KEY
  const [priceChange, setPriceChange] = useState({close: '', pct: ''})
  const [apiString, setApiString] = useState(apiStringify('GPRO', key, apiSchema[0]))
  const [timeSeries, setTimeSeries] = useState({data: null,
                                                active: apiSchema[0],
                                                options: apiSchema,
                                                initialData: null})


  useEffect(() => {
    const asyncContainer = async () => {
      const data = await apiRequest(apiString)
      // const data = AlphaData
      setTimeSeries({data: data,
                     options: apiSchema,
                     active: apiSchema[0],
                     initialData: data})
      setPriceChange(calculatePrice(data))
    }
    asyncContainer()


  }, [])

  const handleTimePeriod = async (currentSelection) => {
    if (timeSeries.options.id === currentSelection.id) { console.log('no changes')}
    else {
      const inputData = await apiRequest(apiStringify('GPRO', key, currentSelection))
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

  const filteredData = filterByDate(timeSeries.data, timeSeries.active)




  const calculatePrice = (data) => {

    if (!data) return ({close: '', pct: ''});
      console.log("Current Value Calculations Ran")

      const timeseriesData = data.data[initialTimeStep]

      const currentClose = new Date(Math.max.apply(null, Object.keys(timeseriesData).map(d => new Date( d ))))

      let previousClose = new Date(Math.max.apply(null, Object.keys(timeseriesData).map(d => new Date( d ))))

      previousClose.setDate(previousClose.getDate() -1)

      const previousDay = Object.keys(timeseriesData).filter( d => new Date(d).getDate() === previousClose.getDate() &&
                                                      new Date(d).getFullYear() === previousClose.getFullYear() &&
                                                      new Date(d).getMonth() === previousClose.getMonth() )

      previousClose = new Date(Math.max.apply(null, previousDay.map(d => new Date( d ))))

      const output = Object.keys(timeseriesData)
        .reduce( (agg, key) => {
            if (new Date(key).valueOf() === currentClose.valueOf() ||
                new Date(key).valueOf() === previousClose.valueOf()) {
              agg.push(timeseriesData[key])
              return agg
            }
            return agg
        }, [])

      const current = {}
      current.close = Number(output[0]['4. close']).toFixed(2)
      current.pct = ((Number(output[0]['4. close']) / Number(output[1]['1. open'])) -1).toFixed(2)
      return current
  }


  return (
    <>
      <Header/>
      <Sidebar/>
      <Content
        timeSeriesData={ filteredData }
        timeSeriesActive={ timeSeries.active }
        timeSeriesOptions={ timeSeries.options }
        handleTimePeriod={ handleTimePeriod }
        priceChange={ priceChange }/>
    </>
  )
}



export default Main
