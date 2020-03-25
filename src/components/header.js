import React from 'react'

const Header = (props) => {
  const { handleDarkMode } = props
  return (
    <header className='header'>
      <button onClick={handleDarkMode}>Dark Mode</button>

    </header>
  )
}

export default Header
