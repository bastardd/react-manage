import React,{PureComponent} from 'react'
import {Form,Input,Select} from 'antd'
import PropTypes from 'prop-types'

const {Item} = Form
const {Option} = Select

class SysAdminAddorUpdate extends PureComponent{

    static propTypes = {
        setForm : PropTypes.func.isRequired,
        roles : PropTypes.array,
        sysAdmin : PropTypes.object
    }

    componentWillMount(){
        this.props.setForm(this.props.form)
    }

    render (){
        const {roles,sysAdmin} = this.props
        const {getFieldDecorator} = this.props.form
        const formItemLayout = {
            labelCol : { span : 4},
            wrapperCol : { span: 20}
        }
        return (
            <Form {...formItemLayout}>
                <Item label='用户名'>
                    {getFieldDecorator('userName',{
                        initialValue : sysAdmin.userName,
                        rules : [{required : true,message : '请输入名称'}]
                    })(<Input placeholder='请输入'/>)}
                </Item>
                <Item label='账号'>
                    {getFieldDecorator('account',{
                        initialValue : sysAdmin.account,
                        rules : [{required : true,message : '请输入账号'}]
                    })(<Input placeholder='请输入'/>)}
                </Item>
                {
                    sysAdmin.id ? null : (
                        <Item label='密码'>
                            {getFieldDecorator('password',{
                                initialValue : sysAdmin.password,
                                rules : [{required : true,message : '请输入密码'}]
                            })(<Input type='password' placeholder='请输入'/>)}
                        </Item>
                    )
                }
                <Item label='手机号'>
                    {getFieldDecorator('phone',{
                        initialValue : sysAdmin.phone,
                        rules : [{required : true,message : '请输入手机号'}]
                    })(<Input placeholder='请输入手机号'/>)}
                </Item>
                <Item label='角色'>
                    {getFieldDecorator('roleId',{
                        initialValue : sysAdmin.roleId,
                    })(<Select>
                        {
                            roles.map(role => <Option value={role.id} key={role.id}>{role.name}</Option>)
                        }
                    </Select>)}
                </Item>
            </Form>
        )
    }
}

export default new Form.create()(SysAdminAddorUpdate)
