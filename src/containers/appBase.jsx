
import React from 'react'
import {connect} from 'react-redux'


import Counter from '../components/Counter'
import {increment,decrement} from '../redux/actions'

/**
 * 这是一个容器组件：
 *  通过connect包装UI组件产生组件
 *  connect():是一个高阶函数
 *  connect():返回的函数是一个高阶组件，接收一个UI组件，生成一个容器组件
 *  高阶组件是为了包装UI组件
 *  容器组件的责任是 ： 向UI组件传入特定的属性
 *  connect()接收2个参数：
 *      1、mapStateToProps
 *      2、mapDispatchToProps
 *          **这里的map含义是映射
 */

/**
 * 用来将redux管理的state数据映射成UI组件的一般属性的函数
 * @param state
 * @returns {{count: *}}
 */
function mapStateToProps(state) {
    return {
        count : state
    }
}

/**
 * 用来将包含dispatch代码的函数映射成UI组件的函数属性的函数
 * @param dispatch
 * @returns {{decrement: (function(*=): *), increment: (function(*=): *)}}
 */
function mapDispatchToProps(dispatch) {
    return {
        increment : (number) => dispatch(increment(number)),
        decrement : (number) => dispatch(decrement(number)),
    }
}

/**
 * 基础版
 */
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)


