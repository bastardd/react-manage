import React from 'react'
import {Form,Input,Button,Select} from 'antd'
import PropTypes from 'prop-types'

const Item = Form.Item
const Option = Select.Option

class SchoolAdd extends React.Component{
    static propTypes = {
        chooseItem : PropTypes.any,
        setForm:PropTypes.func.isRequired
    }

    componentWillMount(){
        //将form对象通过setForm传递给父组件
        this.props.setForm(this.props.form)
    }

    render() {
        const {getFieldDecorator} = this.props.form
        return (
            <Form>
                <Item style={{display : 'none'}}>
                    <span>Id</span>
                    {getFieldDecorator('id',{
                        initialValue : this.props.chooseItem.id || null
                    })(
                        <Input/>
                    )}
                </Item>
                id : <Input value={this.props.chooseItem.id}/>
                <Item>
                    <span>学校名称</span>
                    {getFieldDecorator('schoolName',{
                        initialValue:this.props.chooseItem.name || null,
                        rule: [{required : true,message: '请输入学校名字！'}]
                    })(
                        <Input placeholder='请输入相关数据'/>
                    )}
                </Item>
                <Item>
                    <span>学校地址</span>
                    {getFieldDecorator('schoolAddress',{
                        initialValue : this.props.chooseItem.address || null,
                        rule: [{required: true,message: '请选择选项！'}]
                    })(
                        <Select>
                            <Option value='sc'>四川</Option>
                            <Option value='bj'>北京</Option>
                        </Select>
                    )}
                </Item>
            </Form>
        );
    }
}

export default Form.create()(SchoolAdd)