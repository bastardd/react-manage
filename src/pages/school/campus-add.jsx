import React from 'react'
import {Form,Input,Select} from 'antd'
import PropTypes from 'prop-types'

const Item = Form.Item
const Option = Select.Option

class CampusAdd extends React.Component{
    static propTypes = {
        categorys : PropTypes.array.isRequired,  //一级分类数组
        parentId : PropTypes.string.isRequired,
        setForm:PropTypes.func.isRequired
    }

    componentWillMount (){
        this.props.setForm(this.props.form)
    }

    render() {
        const {getFieldDecorator} = this.props.form
        const {categorys,parentId} = this.props
        return (
            <Form>
                <Item>
                    <span>类型</span>
                    {getFieldDecorator('parentId',{
                        initialValue : parentId,
                    })(
                        <Select>
                            <Option value='0'>一级分类</Option>
                            {
                                categorys.map(c => <Option value={c.key}>{c.name}</Option>)
                            }
                        </Select>
                    )}
                </Item>
                <Item>
                    <span>名称</span>
                    {getFieldDecorator('categoryName',{
                        initialValue : '',
                        rules: [{required : true,message: '请输入名字！'}]
                    })(
                        <Input placeholder='请输入相关数据'/>
                    )}
                </Item>

            </Form>
        );
    }
}

export default Form.create()(CampusAdd)