import React from 'react'
import Header from '../../components/header'
import './login.styl'

function Login (props) {
  const gotoHome = () => {
    props.history.push('/home')
  }

  return (
    <div className='P-login'>
      <Header />
      <h1>Login page</h1>
      <button onClick={gotoHome}>跳转Home页</button>
    </div>
  )
}

export default Login
