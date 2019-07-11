/*redux最核心的管理对象*/
import {createStore} from 'redux'
import reducer from './reducer'

//创建store对象内部会第一次调用reducer得到初始状态值
export default createStore(reducer)