import React,{Component} from 'react'
import { Layout} from 'antd';
import {Switch,Route,Redirect} from 'react-router-dom'

import LeftNav from '../../components/left-nav'
import Header from '../../components/header'

import Home from '../home/home'
import School from '../school/school'
import Campus from '../school/campus'
import Facultys from '../school/facultys'
import SchoolUsers from '../school/schoolUsers'
import Train from '../train/train'
import Company from '../company/company'
import PersonalUser from '../personalUser/personalUser'
import VirtualCompany from '../virtualCompany/virtualCompany'
import OperationSheet from '../operationSheet/operationSheet'
import Authority from '../authority/authority'

const { Content, Footer, Sider } = Layout;

/**
 * 后台管理的路由组建
 */
export default class Admin extends Component {
    render () {
        // const user = memoryUtils.user
        // if (!user || !user.id) {
        //     //自动跳转到登录
        //     return <Redirect to='/login'/>
        // }
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} >Header</Header>
                    <Content style={{ margin: '0 16px',backgroundColor:'white'}}>
                        <Switch>
                            <Route path='/home' component={Home}/>
                            <Route path='/school' component={School}/>
                            <Route path='/campus' component={Campus}/>
                            <Route path='/facultys' component={Facultys}/>
                            <Route path='/schoolUsers' component={SchoolUsers}/>
                            <Redirect to='/home'/>
                        </Switch>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}

