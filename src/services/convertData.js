

const convertData = (data, options) => {
  console.log(data)
  if (data===null) return null;
  let output;
  const inputData = data.data[options.label];
  const reducedData = Object.keys(inputData).reduce((result, key) => {
      const item = {};
      item.x = key;
      item.y = inputData[key]['4. close'];
      result.push(item);
      return result;
  }, []);


  const today = new Date(Math.max.apply(null,reducedData.map(i=>new Date(i.x))));
  today.date = today.getDate();
  today.month = today.getMonth();

  const filteredData = reducedData.filter(i => new Date(i.x).getDate() === today.date &&
                                               new Date(i.x).getMonth() === today.month
                                         )

  output = [ { "id": "line", "data": filteredData } ];
  return output;
}

export default convertData;
