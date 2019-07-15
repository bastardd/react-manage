
import React from 'react'
import {connect} from 'react-redux'

import Counter from '../components/Counter'
import {increment,decrement,incrementAsync} from '../redux/actions'

/**
 * 最终版
 * connect()
 *  //第一个属性指定向Counter传入哪些一般属性
 *  //第二个属性指定向Counter传入哪些函数属性
 */
export default connect(
    state => ({count : state}),
    { increment,decrement,incrementAsync}     //让人难以理解
)(Counter)


