const convertData = (data, options) => {
  console.log(data)
  if (data===null || data.data < 2) return null
  let output
  const inputData = data.data[options.label]

  let counter = Object.keys(inputData).length
  const reducedData = Object.keys(inputData).reduce((result, key) => {
      counter --
      const item = {
        x: counter,
        y: inputData[key]['4. close'],
        date: new Date(key).toLocaleDateString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })
      }
      result.push(item)
      return result
  }, [])

  // const today = new Date(Math.max.apply(null,reducedData.map(i=>new Date(i.x))))
  // today.date = today.getDate()
  // today.month = today.getMonth()
  //
  // const filteredData = reducedData.filter(i => new Date(i.x).getDate() === today.date &&
  //                                              new Date(i.x).getMonth() === today.month
  //                                        )

  output = [ { "id": "line", "data": reducedData } ]
  console.log(output)
  return output
}

export default convertData;
