import React from 'react'
import Header from '../../components/header'
import './home.styl'

function Home () {
  return (
    <div className='P-home'>
      <Header
        param1='abc'
        param2='c'
      />
      <h1>Home page</h1>
    </div>
  )
}

export default Home
