/**
 * 包含n个action creator函数的模块
 * 同步action ： 对象｛type : 'xxx',data : 数据值｝
 * 异步action ： 函数 dispatch = {}
 */

import {doLogin} from '../api/ajax'

import {USER,REST_USER} from './action-types'
/**
 * 用来实现登录的异步action
 */
export const login = (values) => {
    return dispatch => {
        //1、执行异步ajax请求
        const result = doLogin({method:'POST',data: values})
        //2、如果成功，分发成功的同步action
        if (result){
            // const user = result.data
            const user = {
                id : 2 ,
                userName : '李四'
            }
            sessionStorage.setItem('user',user)
            dispatch({type : USER, data : user})
        } else {    //   如果失败了，分发一个失败的action
            const msg = result.msg

        }

    }
}

/**
 * 退出登录的同步action
 * @returns {di}
 */
export const loginOut = () => {
    //清除用户数据
    sessionStorage.removeItem('user')
    //返回action对象
    return {type : REST_USER}
}
