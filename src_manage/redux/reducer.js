import {combineReducers} from 'redux'
import {USER,REST_USER} from './action-types'

const initialUser = sessionStorage.getItem('user') || {
    id　: 1,
    userName : '张三'
}
const initialValue = {
    xx : '11'
}
function user(state=initialUser,action) {
    console.log(state)
    switch (action.type) {
        case USER :
            return action.user
        case REST_USER :
            return {}
        default :
            return state
    }
}

function xxx(state=initialValue,action) {
    switch (action.type) {
        default :
            return state
    }
}

/**
 * 向外默认暴露的是合并产生的总的reducer函数
 * 管理的总的state的结构：｛
 *      userInfo : {}
 *      xxx : {}
 * ｝
 */
export default combineReducers({
    user,
    xxx
})