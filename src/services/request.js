import axios from 'axios'
// import { token } from '../data/token'

 const getData = async () => {
  try {
    const response = await axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=GPRO&interval=5min&apikey=');
    return(response);
  } catch (err) {
    console.error(err);
  }
}
export default getData;
