import timePeriods from '../data/apiSchema'

const calculatePrice = (data) => {

  console.log(data)
  if (!data) return ({close: '', change: ''});
    const initialTimeStep = timePeriods[0].label
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


    const current = {
      close: Number(output[0]['4. close']).toFixed(2),
      change: ((Number(output[0]['4. close']) / Number(output[1]['1. open'])) -1).toFixed(2)
    }

    return current
}


export default calculatePrice
