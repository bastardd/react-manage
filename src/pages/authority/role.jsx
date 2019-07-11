import React from 'react'
import {Card,Icon,Table,Button,Modal,Form} from 'antd'
import {rolesDataSource} from "../../utils/staticDatas";

import RoleAdd from './role-add'
import RoleAuth from './role-add-auth'

class Role extends React.Component{

    state = {
        roles : [
            {
                _id : 1,
                roleName : '超级管理员',
                createUser :'张三',
                createDate : '2019-11-11'
            },
            {
                _id : 2,
                roleName : '超级管理员',
                createUser :'张三',
                createDate : '2019-11-11'
            },
            {
                _id : 3,
                roleName : '超级管理员',
                createUser :'张三',
                createDate : '2019-11-11'
            },
            {
                _id : 4,
                roleName : '超级管理员',
                createUser :'张三',
                createDate : '2019-11-11'
            }
        ],
        role : {},   //选中的role,方便之后编辑角色权限
        isShowAdd : false,
        isShowAuth : false,
    }

    constructor(props) {
        super(props);

        this.auth = React.createRef();
    }


    //添加角色
    addRole = () => {
        this.form.validateFields((err,values) => {
            if (!err){
                this.setState({isShowAdd:false})
                console.log(values)
                //发起请求,得到新的角色信息
                const role = []//result中的
                //message.success('请求成功')
                //更新列表数据,重新产生一个新的roles，再增加一个
                this.setState(state =>(
                    {
                        roles : [...state.roles,role]
                    }
                ))
                // const roles =
                this.form.resetFields()
            }
        })
    }

    //更新角色权限
    updateRole = () => {
        this.setState({isShowAuth : false})
        const newAuth = this.auth.current.getMenus();
        console.log(newAuth)
        //发送请求，更新
        //重新发请求获取this.getRoles(),或者如下更新
        this.setState({
            roles : [...this.state.roles]
        })
        //如果当前更新的是自己的角色的权限，强制退出
        // if (this.state.role.id == sessionStorage.getItem('user').roleId) {
        //     //清空数据，再强制退出
        //     this.props.history.replace('/login')
        // } else {
        //     this.setState({
        //         roles : [...this.state.roles]
        //     })
        // }
    }

    handleCancel = () => {
        this.setState({isShowAdd : false})
        this.form.resetFields()
    }

    getRoles = () => {
        //发起请求，更新state中的roles
    }

    //选中某一行
    onRow = (role) => {
        return {
            onClick : event => {    //点击行
                this.setState({role})
            }
        }
    }

    initColumns = () => {
        this.columns = rolesDataSource
    }

    componentWillMount (){
        this.initColumns()
    }

    //发请求，初始化
    componentDidMount(){
        this.getRoles()
    }

    render (){
        const {roles,role,isShowAdd,isShowAuth} = this.state
        const title = (
            <span>
                <Button type='primary' onClick={() => this.setState({isShowAdd : true})}>创建角色</Button>&nbsp;&nbsp;
                <Button type='primary' disabled={!role._id}
                        onClick={() => this.setState({isShowAuth : true})}>设置角色权限</Button>
            </span>
        )
        //配置表格可选
        const rowSelection = {
            type : 'radio',
            selectedRowKeys : [role._id],
            onSelect : (role) => {      //选择某个radio时调用
                this.setState({role})
            }
        }
        return (
            <Card title={title}>
                <Table bordered
                       rowKey='_id'
                       dataSource={roles}
                       columns={this.columns}
                       rowSelection={rowSelection}
                       onRow={this.onRow}
                   />
                <Modal title='创建角色'
                        visible={isShowAdd}
                        onOk={this.addRole}
                        onCancel={this.handleCancel}
                        >
                    <RoleAdd setForm={(form) => {this.form = form}}/>
                </Modal>
                <Modal title='设置角色权限'
                       visible={isShowAuth}
                       onOk={this.updateRole}
                       onCancel={() => {
                           this.setState({isShowAuth :false})
                       }}
                >
                    <RoleAuth role={role} ref={this.auth}/>
                </Modal>
            </Card>
        )
    }
}

export default new Form.create()(Role)
