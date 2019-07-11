import React from 'react'
import {Modal} from 'antd'
import {withRouter} from 'react-router-dom'
import './index.less'

class Header extends React.Component{
    //退出登录
    logout = () => {
        Modal.confirm({
            content: '确定退出吗',
            onOk: () => {
                //清除数据(用户信息)
                //退出
                this.props.history.replace('/login')
            }
        })
    }
    render (){
        return (
            <div className='header'>
                <div className="header-info">
                    <span>欢迎你，admin</span>
                    <a href="javascript:;" onClick={this.logout}>退出</a>
                </div>
            </div>
        )
    }
}
export default withRouter(Header)

