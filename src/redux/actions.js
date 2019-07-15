/*包含n个用来创建action的工厂函数(action creators)*/

import {INCREMENT,DECREMENT} from './actionTypes'
/**
 * 增加的同步的action
 *      返回的对象
 * @param number
 * @returns {{data: *, type: string}}
 */
export const increment = (number) => ({type : INCREMENT,data : number})

/**
 * 减少的同步的action
 *      返回的对象
 * @param number
 * @returns {{data: *, type: string}}
 */
export const decrement = (number) => ({type : DECREMENT,data : number})

/**
 * 增加的异步action
 *        返回一个新的函数
 * @param number
 */
export const incrementAsync = number => {
   return dispatch => {
       //1、执行异步代码（定时器，ajax请求，promise）
       setTimeout(() => {
           //2、当前异步任务执行完成时，需要分发一个同步的action
           dispatch(increment(number))
       },1000)
   }
}