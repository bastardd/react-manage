import React from 'react'
import {Link,withRouter} from 'react-router-dom'
import {Menu, Icon } from 'antd'

import menuList from '../../config/menuConfig'
import logo from '../../assets/images/login-logo.png'
import './index.less'

const { SubMenu } = Menu;

class LeftNav extends React.Component{

    getMenuNodes = () => {
        const path = this.props.location.pathname
        return menuList.reduce((pre,item) => {
            if (!item.children){
                pre.push((<Menu.Item key={item.key}>
                    <Link to={item.key}>
                        <Icon type={item.icon}/>
                        <span>{item.title}</span>
                    </Link>
                </Menu.Item>))
            }else {
                const cItem = item.children.find(cItem => cItem.key === path)
                if (cItem) {
                    this.openKey = item.key
                }
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
            return pre
        },[])
    }

    //在第一次render之前执行一次
    componentWillMount(){
        this.menuNodes = this.getMenuNodes()
    }
    render (){
        //得到当前的路径
        const path = this.props.location.pathname
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
