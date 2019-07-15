import React from 'react'
import {Modal} from 'antd'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import {loginOut} from '../../redux/actions'
import './index.less'

class Header extends React.Component{
    //退出登录
    logout = () => {
        Modal.confirm({
            content: '确定退出吗',
            onOk: () => {
                //清除数据(用户信息)
                this.props.loginOut()
                //退出
                this.props.history.replace('/login')
            }
        })
    }
    render (){
        const {userName} = this.props.user
        return (
            <div className='header'>
                <div className="header-info">
                    <span>欢迎你，</span><span>{userName}</span>
                    <a href="javascript:;" onClick={this.logout}>退出</a>
                </div>
            </div>
        )
    }
}

/**
 * export default withRouter(Header)是一个UI组件
 * state => ({}),{}固定格式;分别传递对象和函数
 *
 */
export default connect(
    state => ({user : state.user}),{loginOut}
)(withRouter(Header))

