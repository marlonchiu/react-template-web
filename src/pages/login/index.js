import React from 'react'
import Header from '../../components/header'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'
import { Button } from 'antd'
import './login.styl'

function Login (props) {
  const gotoHome = () => {
    props.history.push('/home')
  }

  return (
    <div className='P-login'>
      <Header />
      <h1>Login page</h1>
      <p>login: myData = {props.myData}</p>
      <Button
        type='primary'
        onClick={() => { props.getData('123456') }}>更改login的myData</Button>
      <Button onClick={gotoHome}>跳转Home页</Button>
    </div>
  )
}

// 把 store中的数据映射到组件的 props
const mapStateToProps = (state) => ({
  myData: state.getIn(['login', 'myData'])
})

// 把 store的 Dispatch 映射到组件的 props
const mapDispatchToProps = (dispatch) => ({
  getData (data) {
    const action = actionCreators.getData(data)
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
