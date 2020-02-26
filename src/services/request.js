import axios from 'axios';
const apiKey = process.env.REACT_APP_STOCKS_API_KEY;


 const getData = async () => {
  try {
    const response = await axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=GPRO&interval=5min&apikey=' + apiKey);
    return(response);
  } catch (err) {
    console.error(err);
  }
}
export default getData;
