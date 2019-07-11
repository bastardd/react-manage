import React from 'react'
import {Card,Button,Table,Modal,message,Divider} from 'antd'
import {PAGE_SIZE} from "../../utils/constants";

import SysAdminAddorUpdate from './sysAdmin-addorUpdate'

import {roleData, sysAdminDataSource} from "../../utils/staticDatas";

export default class SysAdmin extends React.Component{

    state = {
        sysAdmins : [],
        roles : roleData,
        isShow : false,
    }

    showUpdate = (record) =>{
        this.setState({isShow : true})
        this.sysAdmin = record
    }

    showAdd = () => {
        //新增的时候，清空当前保存的对象
        this.sysAdmin = null
        this.setState({isShow : true})
    }

    addOrUpdateSysAdmin = () => {
        this.setState({ isShow : false})
        //收集数据
        this.form.validateFields((errors, values) => {
            if (!errors){
                console.log(values)
            }
        })
        this.form.resetFields()
        if (this.sysAdmin){
            //更新请求

        } else {
            //新增请求
        }
        //提交请求
        //更新列表显示
        this.initSysAdmin()
    }

    //删除指定用户
    delete = (record) => {
        Modal.confirm({
            title : '确认删除当前用户吗？',
            onOk() {
                //发情求删除用户
                message.success('删除用户成功！')
                //更新列表
                this.initSysAdmin()
            }
        })
    }

    handleCancel = () => {
        this.setState({isShow : false})
        this.form.resetFields()
    }

    initColumns = () => {
        this.columns = [
            {
                title : '用户名',
                dataIndex : 'userName'
            },
            {
                title : '账号',
                dataIndex : 'account'
            },
            {
                title : '创建人',
                dataIndex : 'createName'
            },
            {
                title: '所属角色',
                dataIndex: 'roleId',
                render: (roleId) => this.roleNames[roleId]
            },
            {
                title : '操作',
                render: (record) => (
                    <span>
                        <a href='javascript:;' onClick={() => this.showUpdate(record)}>修改</a>
                        <Divider type="vertical"/>
                        <a onClick={() => this.delete(record)}>删除</a>
                    </span>
                )
            },
        ]
    }

    /**
     * 根据role数组，生成包含所有角色的对象，属性名用角色id
     * 只需执行一次，就可以获取列表用户的相关角色
     */
    initRoleNames = (roles) => {
        const roleNames = roles.reduce((pre,role) => {
            pre[role.id] = role.name
            return pre
        },{})
        //保存
        this.roleNames = roleNames
    }

    initSysAdmin = () => {
        //发请求，更新状态，这里先使用静态数据
        //获得的结果中可能包含所有的角色
        this.initRoleNames(roleData)
        this.setState({ sysAdmins : sysAdminDataSource})
    }

    componentWillMount(){
        this.initColumns()
    }

    componentDidMount(){
        this.initSysAdmin()
    }

    render (){
        const {sysAdmins,isShow,roles} = this.state
        const sysAdmin = this.sysAdmin || {}
        const title = (
            <Button type='primary' onClick={this.showAdd}>创建系统管理员</Button>
        )
        return (
            <Card title={title}>
                <Table bordered
                       rowKey='id'
                       dataSource={sysAdmins}
                       columns={this.columns}
                       pagination={PAGE_SIZE}
                />
                <Modal title={sysAdmin.id ? '修改' : '添加'}
                       visible={isShow}
                       onOk={this.addOrUpdateSysAdmin}
                       onCancel={this.handleCancel}
                >
                    <SysAdminAddorUpdate
                        setForm={(form) => this.form = form}
                        roles={roles}
                        sysAdmin={sysAdmin}/>
                </Modal>
            </Card>
        )
    }
}
