import React from 'react'
import Topbar from '../Layouts/Topbar'
import NavBar from '../Layouts/NavBar'

const Header = () => {
  return (
    <header className='border-b border-gray-400'>
      {/* topbar */}
      <Topbar/>
      {/* navbar */}
      <NavBar/>
      {/* cart drawer */}
    </header>
  )
}

export default Header
