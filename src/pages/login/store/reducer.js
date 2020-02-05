import * as constants from './constants'
import { fromJS } from 'immutable'

// 初始默认的state
const defaultState = fromJS({
  myData: null
})

const getData = (state, action) => {
  return state.set('myData', action.data)
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SET_DATA:
      return getData(state, action)
    default:
      return state
  }
}
