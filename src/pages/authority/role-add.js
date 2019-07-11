import React from 'react'
import {Form,Input} from 'antd'
import PropTypes from 'prop-types'

const {Item} = Form

class RoleAdd extends React.Component{

    static propTypes = {
        setForm : PropTypes.func.isRequired
    }

    componentWillMount(){
        this.props.setForm(this.props.form)
    }

    render (){
        const {getFieldDecorator} = this.props.form
        const formItemLayout = {
            labelCol : { span : 4},
            wrapperCol : { span: 20}
        }
        return (
            <Form>
                <Item label='角色名称' {...formItemLayout}>
                    {getFieldDecorator('roleName',{
                        rules : [{required : true,message : '请输入角色名称'}]
                    })(<Input placeholder='请输入'/>)}
                </Item>
            </Form>
        )
    }
}

export default new Form.create()(RoleAdd)
