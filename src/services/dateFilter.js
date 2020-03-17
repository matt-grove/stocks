const dateFilter = ( inputData, options ) => {
  if (!inputData) return null

  const innerDataTimeSeries = inputData.data[options.label]
  let openDate = new Date(Math.max.apply(null, Object.keys(innerDataTimeSeries).map(d => new Date( d ))))
  openDate.setHours(0,0,0,0)
  openDate.setDate(openDate.getDate() - options.dateRange)

  const filteredData = Object.keys(innerDataTimeSeries)
    .filter(
       d => new Date(d) >= openDate
    )
    .reduce( (agg, key) => {
            agg[key] = innerDataTimeSeries[key]
            return agg
    }, {})

  return { ...inputData, data: {...inputData.data, [options.label]: filteredData} }
}

export default dateFilter
