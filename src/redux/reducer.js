/*reducer函数模块：
*   根据旧的state和指定的action，返回一个心的state*/
import {combineReducers} from 'redux'
import {INCREMENT,DECREMENT} from './actionTypes'

/**
 *管理count状态数据的reducer
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

const initUser = {
    id : 1,
    userName : '张三',
    account : '123456768'
}
/**
 * 管理的用户的信息
 */
function user(state=initUser,action) {
    switch (action.type) {

    }
}

/**
 * combineReducers函数 ： 接收包含所有reducer函数的对象，返回一个新的reducer函数（总reducer）
 *      总的reducer函数管理的state的结构： 是一个容器，对象
 *      ｛
 *          count : 1,
 *          user : {}
 *      ｝
 *
 */
// export default combineReducers({
//     count,
//     user
// })