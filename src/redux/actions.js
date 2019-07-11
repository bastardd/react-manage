/*包含n个用来创建action的工厂函数(action creators)*/

import {INCREMENT,DECREMENT} from './actionTypes'
/**
 * 增加的action
 * @param number
 * @returns {{data: *, type: string}}
 */
export const increment = (number) => ({type : INCREMENT,data : number})

/**
 * 减少的action
 * @param number
 * @returns {{data: *, type: string}}
 */
export const decrement = (number) => ({type : DECREMENT,data : number})