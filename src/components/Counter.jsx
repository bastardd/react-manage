/*
* 应用的跟组件*/
import React from 'react'
import PropTypes from 'prop-types'

/**
 * ui组件
 *  主要做显示，与用户交互
 *  代码中没有任何redux相关的代码
 */
export default class Counter extends React.Component{

    static propTypes = {
        count : PropTypes.number.isRequired,
        increment : PropTypes.func.isRequired,
        decrement : PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.numRfe = React.createRef()
    }

    increment = () => {
        const number = this.numRfe.current.value*1
        this.props.increment(number)
    }

    decrement = () => {
        const number = this.numRfe.current.value*1
        this.props.decrement(number)
    }

    incrementIfOdd = () => {
        const number = this.numRfe.current.value*1
        if (this.props.count % 2 === 1) {
            this.props.increment(number)
        }
    }

    incrementIfAsync = () => {
        const number = this.numRfe.current.value*1
        setTimeout(() => {
            this.props.increment(number)
        },1000)

    }

    render(){
        const {count} = this.props
        return (
            <div>
                <p>点击我的数{count}</p>&nbsp;&nbsp;&nbsp;
                <select ref={this.numRfe}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>&nbsp;&nbsp;&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;&nbsp;&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;&nbsp;&nbsp;
                <button onClick={this.incrementIfOdd}>+ if odd</button>&nbsp;&nbsp;&nbsp;
                <button onClick={this.incrementIfAsync}>+ if async</button>&nbsp;&nbsp;&nbsp;
            </div>
        )
    }
}