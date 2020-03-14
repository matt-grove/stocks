const apiStringify = (symbol, key, apiSchema) => {
  // const symbol = "GPRO"
  const api = "https://www.alphavantage.co/query?outputsize=full" +
              "&function=" + apiSchema.apiFunction +
              "&apikey=" + key +
              "&symbol=" + symbol +
              ((apiSchema.interval===null) ? "" : "&interval=" + apiSchema.interval)

  return api
}

export default apiStringify
