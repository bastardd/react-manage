import React from 'react'
import {Form,Input,Button,Select} from 'antd'
import PropTypes from 'prop-types'

const Item = Form.Item

class CampusUpdate extends React.Component{
    static propTypes = {
        categoryName : PropTypes.string.isRequired,
        setForm : PropTypes.func.isRequired
    }

    componentWillMount (){
        //将form对象通过setForm传给父组件
        this.props.setForm(this.props.form)
    }

    render() {

        const {getFieldDecorator} = this.props.form
        const {categoryName} = this.props
        return (
            <Form>
                <Item>
                    <span>名称</span>
                    {getFieldDecorator('categoryName',{
                        initialValue : categoryName,
                        rules: [{required : true,message: '请输入名字！'}]
                    })(
                        <Input placeholder='请输入相关数据'/>
                    )}
                </Item>

            </Form>
        );
    }
}

export default Form.create()(CampusUpdate)