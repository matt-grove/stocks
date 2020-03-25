import React from 'react'
import '../styles/sidebar.css'
import Stock from './stock.js'

const Sidebar = (props) => {
  const { stocks, active, price, handleActiveStock } = props

  const sideBarList = stocks.map(s => {
      return (
        <Stock
          key={ s.short }
          stock={ s }
          active={ active }
          price={ price }
          handleActiveStock={ handleActiveStock }/>
      )
  })


  return (
    <div className='sidebar'>
      { sideBarList }
    </div>
  )
}

export default Sidebar
