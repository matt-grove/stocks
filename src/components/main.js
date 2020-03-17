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

  const key = process.env.REACT_APP_STOCKS_API_KEY
  const [apiString, setApiString] = useState(apiStringify('GPRO', key, apiSchema[0]))
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
    if (timeSeries.options.id === currentSelection.id) { console.log('no changes')}
    else {
      const inputData = await apiRequest(apiStringify('GPRO', key, currentSelection))
      let tsOptions = [...timeSeries.options]
      tsOptions = tsOptions.map(d => {
        (d.id=== currentSelection.id) ? d.active = true: d.active = false
        return d
      })
      setTimeSeries({data: inputData, active: currentSelection, options: tsOptions})
    }
  }

  const filteredData = filterByDate(timeSeries.data, timeSeries.active)


  const currentValue = () => {
    if (filteredData != null) {
      const timeseriesData = filteredData.data[timeSeries.active.label]
      const maxDate = new Date(Math.max.apply(null, Object.keys(timeseriesData).map(d => new Date( d ))))
      const minDate = new Date(Math.min.apply(null, Object.keys(timeseriesData).map(d => new Date( d ))))

      const output = Object.keys(timeseriesData)
        .reduce( (agg, key) => {
            if (new Date(key).valueOf() === maxDate.valueOf() ||
                new Date(key).valueOf() === minDate.valueOf()) {
              agg.push(timeseriesData[key])
              return agg
            }
            return agg
        }, [])

        return output
    }
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
        currentValue={ currentValue() }/>
    </>
  )
}



export default Main
