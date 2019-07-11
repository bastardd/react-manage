import React from 'react'
import {Link,withRouter} from 'react-router-dom'
import {Menu, Icon } from 'antd'

import menuList from '../../config/menuConfig'
import logo from '../../assets/images/login-logo.png'
import './index.less'

const { SubMenu } = Menu;

class LeftNav extends React.Component{

    //递归
    getMenuNodes = () => {
        const path = this.props.location.pathname
        return menuList.reduce((pre,item) => {
            //如果当前用户有item对应的权限，需要去显示对应的菜单项
            if (this.hasAuth(item)) {
                if (!item.children){
                    //向pre中添加Menu.Item
                    pre.push((<Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon}/>
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>))
                }else {
                    const cItem = item.children.find(cItem => path.indexOf(cItem.key) === 0)
                    if (cItem) {
                        this.openKey = item.key
                    }

                    //向pre中添加SubMenu
                    pre.push((<SubMenu
                        key={item.key}
                        title={<span>{item.title}</span>}>
                        {
                            item.children.map((child) =>{
                                return <Menu.Item key={child.key}>
                                    <Link to={child.key}>
                                        <span>{child.title}</span>
                                    </Link>
                                </Menu.Item>
                            })
                        }
                    </SubMenu>))
                }
            }
            return pre
        },[])
    }

    //判断当前登录用户对item是否有权限
    hasAuth = (item) => {
        // const key = item.key
        // const menus = sessionStorage.getItem("user").roles || []
        // const userName = sessionStorage.getItem("user").userName || ''
        //
        // /**
        //  *1、如果当前用户是超级管理员
        //  *2、当前用户有此item的权限，key有没有在menus中
        //  *3、如果当前item是公开的，如首页
        //  *4、如果当前用户有此item的某个子item的权限
        //  */
        //
        // if (userName === 'admin' || item.isPublic || menus.indexOf(key) !== -1){
        //     return true
        // } else if (item.children) {
        //     return !!item.children.find(child => menus.indexOf(child.key) !== -1)
        // }else {
        //     return false
        // }

        return true
    }

    //在第一次render之前执行一次
    componentWillMount(){
        this.menuNodes = this.getMenuNodes()
    }
    render (){
        //得到当前的路径
        let path = this.props.location.pathname
        if (path.indexOf('/facultys') === 0) {     //说明是它子路由
            path = '/facultys'
        }
        const openKey = this.openKey
        return (
            <div className="left-nav">
                <Link to='/' className="left-nav-header">
                    <img src={logo} alt="logo"/>
                    <h1>中企云智库</h1>
                </Link>
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[path]}
                    defaultOpenKeys={[openKey]}
                >
                    {
                        this.menuNodes
                    }
                </Menu>
            </div>
        )
    }
}

/**
 * withRouter高阶组件
 * 包装非路由组件，返回一个新的组件
 * 新的组件是向非路由组件传递3个属性：history/location/match
 */
export default withRouter(LeftNav)
