import axios from 'axios'

const getData = async (apiSchema) => {
  const key = process.env.REACT_APP_STOCKS_API_KEY
  const symbol = "GPRO"
  const api = "https://www.alphavantage.co/query?" +
              "function=" + apiSchema.apiFunction +
              "&apikey=" + key +
              "&symbol=" + symbol +
              ((apiSchema.interval===null) ? "" : "&interval=" + apiSchema.interval)
  try {
    return await axios.get(api)
  }

  catch (err) {
    console.error(err)
    return null
  }
}



export default getData
