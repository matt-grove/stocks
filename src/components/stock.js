import React from 'react'
import PropTypes from 'prop-types'

const Stock = (props) => {

  const { stock, activeStock, price, setActiveStock } = props
  const currentPrice = (stock.short === activeStock.short ) ? price : {close: '', change: ''}

  return (
    <div
      className={(stock.short===activeStock.short) ? "sb-stock sb-selected": "sb-stock"}
      onClick={() => setActiveStock(stock)}>
      <div className='sb-inner'>
        <div className='sb-row-1'>
          <h3 className="sb-overflow">{ stock.short }</h3>
          <h5>{ currentPrice.close }</h5>
        </div>
        <div className="sb-row-2">
          <h4 className="sb-overflow">{stock.long}</h4>
          <h5 className={(currentPrice.change >= 0) ? 'emph1-text' : 'emph2-text'}>{(currentPrice.change > 0) ? "+" + currentPrice.change : currentPrice.change}</h5>
        </div>
      </div>
    </div>
  )
}

Stock.propTypes = {
  stock: PropTypes.object.isRequired,
  activeStock: PropTypes.object.isRequired,
  price: PropTypes.object.isRequired,
  setActiveStock: PropTypes.func.isRequired
}


export default Stock
