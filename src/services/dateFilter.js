const dateFilter = ( inputData, options ) => {
  if (!inputData) return null

  const innerDataTimeSeries = inputData.data[options.label]

  const closeDate = new Date(Math.max.apply(null, Object.keys(innerDataTimeSeries).map(d => new Date( d ))))
  let openDate = new Date(Math.max.apply(null, Object.keys(innerDataTimeSeries).map(d => new Date( d ))))
  openDate.setDate( closeDate.getDate() - options.dateRange )

  const dates = {
    openDay: openDate.getDate(),
    openMonth: openDate.getMonth(),
    closeDay: closeDate.getDate(),
    closeMonth: closeDate.getMonth()
  }

  const filteredData = Object.keys(innerDataTimeSeries)
    .filter(
       d => new Date(d).getDate() <= dates.closeDay &&
            new Date(d).getMonth() <= dates.closeMonth &&
            new Date(d).getDate() >= dates.openDay &&
            new Date(d).getMonth() >= dates.openMonth
    )
    .reduce( (agg, key) => {
            agg[key] = innerDataTimeSeries[key]
            return agg;
    }, {})

  return { ...inputData, data: {...inputData.data, [options.label]: filteredData} }
}

export default dateFilter
