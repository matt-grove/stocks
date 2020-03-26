import React from 'react'
import PropTypes from 'prop-types'
import '../styles/sidebar.css'
import Stock from './stock.js'

const Sidebar = (props) => {
  const { stocks, activeStock, price, setActiveStock } = props

  const sideBarList = stocks.map(s => {
      return (
        <Stock
          key={ s.short }
          stock={ s }
          activeStock={ activeStock }
          price={ price }
          setActiveStock={ setActiveStock }/>
      )
  })

  return (
    <div className='sidebar'>
      { sideBarList }
    </div>
  )
}

Sidebar.propTypes = {
  stocks: PropTypes.array.isRequired,
  activeStock: PropTypes.object.isRequired,
  price: PropTypes.object.isRequired,
  setActiveStock: PropTypes.func.isRequired
}

export default Sidebar
