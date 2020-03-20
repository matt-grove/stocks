const convertData = (data, options) => {
  if (data===null || data.data < 2) return null
  const inputData = data.data[options.label]

  let counter = Object.keys(inputData).length
  const reducedData = Object.keys(inputData).reduce((result, key) => {
      counter --

      const item = {
        x: counter,
        y: inputData[key]['4. close'],
        date: new Date(key).toLocaleDateString('en-GB',
            {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            }
          ),
        time: (options.dateRange <= 7 ) ?
          new Date(key).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
          : null
      }


      result.push(item)
      return result
  }, [])

  return [ { "id": "line", "data": reducedData } ]

}

export default convertData
