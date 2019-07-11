
import React from 'react'
import {connect} from 'react-redux'

import Counter from '../components/Counter'
import {increment,decrement} from '../redux/actions'

/**
 * 最终版
 */
export default connect(
    state => ({count : state}),
    { increment,decrement }     //让人难以理解
)(Counter)


