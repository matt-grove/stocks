import axios from 'axios'
import apiSchema from '../data/apiSchema'

const getData = async () => {

  const apiInfo = apiSchema[0]
  const apiKey = process.env.REACT_APP_STOCKS_API_KEY
  const apiSymbol = "GPRO"
  const apiString = "https://www.alphavantage.co/query?" +
                    "function=" + apiInfo.apiFunction +
                    "&apikey=" + apiKey +
                    "&symbol=" + apiSymbol +
                    ((apiInfo.interval===null) ? "" : "&interval=" + apiInfo.interval)

  try {
    return await axios.get(apiString)
  }
  catch (err) {
    console.error(err)
  }

}

export default getData
