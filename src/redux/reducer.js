/*reducer函数模块：
*   根据旧的state和指定的action，返回一个心的state*/
import {INCREMENT,DECREMENT} from './actionTypes'

//管理count状态数据的reducer
/**
 *
 * @param state 就是默认的count的值
 * @param action 是一个对象，内部有：type，data属性
 * @returns {number}
 */
export default function count(state=1,action) {
    console.log(state,action)
    const {data} = action
    switch (action.type) {
        case INCREMENT :
            return state + data
        case DECREMENT :
            return state - data
        default :
            return state
    }
}