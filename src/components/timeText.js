import React from 'react'
import PropTypes from 'prop-types'

const TimeText = ({ price, name }) => {

  return (
    <div className='time-text'>
      <div className='time-text-row'>
        <h2>{ name.short }</h2>
        <div className='time-text-right'>
          <h3>{price.close}</h3>
        </div>
      </div>
      <div className='time-text-row'>
        <div className='time-text-left'>
          <h4>{ name.long }</h4>
        </div>
        <div className='time-text-right'>
          <h5 className={(price.change >= 0) ? 'emph1-text' : 'emph2-text'}>
            {(price.change > 0) ? "+" + price.change : price.change}
          </h5>
        </div>
      </div>
    </div>
  )
}

TimeText.propTypes = {
  price: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired
}

export default TimeText
