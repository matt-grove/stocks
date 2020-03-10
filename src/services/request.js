import axios from 'axios'
import apiSchema from '../data/apiSchema'

const getData = async (apiFunction, interval) => {
  const key = process.env.REACT_APP_STOCKS_API_KEY
  const symbol = "GPRO"
  const api = "https://www.alphavantage.co/query?" +
              "function=" + apiFunction +
              "&apikey=" + key +
              "&symbol=" + symbol +
              ((interval===null) ? "" : "&interval=" + interval)

  try {
    return await axios.get(api)
  }

  catch (err) {
    console.error(err)
    return null
  }
}



export default getData
