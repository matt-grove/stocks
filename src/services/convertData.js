const convertData = async (apiReq) => {
  let output;
  const data = await apiReq;
  const inputData = data.data["Time Series (5min)"];
  const reducedData = Object.keys(inputData).reduce((result, key) => {
      const item = {};
      item.x = key;
      item.y = inputData[key]['4. close'];
      console.log(result)
      result.push(item);
      return result;
  }, []);


  const today = new Date(Math.max.apply(null,reducedData.map(i=>new Date(i.x))));
  today.date = today.getDate();
  today.month = today.getMonth();

  const filteredData = reducedData.filter(i => new Date(i.x).getDate() === today.date &&
                                               new Date(i.x).getMonth() === today.month
                                         )

  output = [ { "id": "5min", "data": filteredData } ];
  return output;
}

export default convertData;
