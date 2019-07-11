import React from 'react'
import {Card,Icon,Form,Input,Cascader,Upload,Button} from 'antd'

import PicturesWall from './picturesWall'

const {Item} = Form
const {TextArea} = Input
const options = [
    {
        value: 'sc',
        label: '四川',
        isLeaf: false,
    },
    {
        value: 'cq',
        label: '重庆',
        isLeaf: false,
    },
];

/**
 * 院系管理
 */
class FacultysAddAndUpdate extends React.Component{

    state = {
        options,
    };

    constructor (props){
        super(props)

        //创造一个容器
        this.imgs = React.createRef()
    }

    onChange = (value, selectedOptions) => {
        console.log(value, selectedOptions);
    };

    /**
     * 用于加载下一级列表的回调函数
     * @param selectedOptions
     */
    loadData = selectedOptions => {
        const targetOption = selectedOptions[0];
        targetOption.loading = true;

        //模拟请求异步获取二级列表数据
        setTimeout(() => {
            targetOption.loading = false;
            //指定下一级列表
            targetOption.children = [
                {
                    label: `${targetOption.label} 城市1`,
                    value: 'dynamic1',
                },
                {
                    label: `${targetOption.label} 城市2`,
                    value: 'dynamic2',
                },
            ];
            this.setState({
                options: [...this.state.options],
            });
        }, 1000);
    };

    submit = () => {
        this.props.form.validateFields((err,value)=>{
            if (!err){
                alert('发送请求')
                //收集数据，封装成相应的对象
                console.log(value)
                const imgs = this.imgs.current.getImgs()
                //发送请求添加
                console.log(imgs)
                //根据结果显示信息
            } else {

            }
        })
    }

    componentWillMount (){
        const data = this.props.location.state  //如果是添加没值，否则有值
        //保存是否是更新的标识，
        this.isUpdate = !!data
        //保存备用
        this.faculty = data || {}
        console.log(data)
    }

    render (){
        const {isUpdate,faculty} = this
        //先取出当前对象的级联id
        //图片回显
        const {id,pid} = faculty
        //用来保存
        const types = []
        if (isUpdate){
            //如果是一级
            if (pid === '0'){
                types.push(id)
            } else {//如果是二级
                types.push(id)
                types.push(pid)
            }

        }
        const title = (
            <span>
                <Icon type='arrow-left' style={{color :'red',marginRight : 15}}
                    onClick={() => this.props.history.goBack()}/>
                <span>{isUpdate ? '修改' : '添加'}</span>
            </span>
        )
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        const {getFieldDecorator} = this.props.form

        return (
            <Card title={title}>
                <Form {...formItemLayout}>
                    <Item label="院系名称">
                        {getFieldDecorator('name',{
                            initialValue : faculty.name,
                            rules : [{required : true,message :'请输入名称'}]
                        })(
                            <Input placeholder='请输入名称'/>
                        )}
                    </Item>
                    <Item label="描述">
                        {getFieldDecorator('desc',{
                            rules : [{required : true,message :'请输入名称'}]
                        })(<TextArea autosize={{minRows : 2,maxRows : 6}}/>)}
                    </Item>
                    <Item label="人数">
                        {getFieldDecorator('personNum',{
                            rules : [{required : true,message :'请输入名称'}]
                        })(<Input type='number' addonAfter="个"/>)}
                    </Item>
                    <Item label="分类">
                        {getFieldDecorator('type',{
                            initialValue : types,
                            rules : [{required : true,message :'请输入名称'}]
                        })(<Cascader options={this.state.options}
                                     loadData={this.loadData}
                                     onChange={this.onChange}
                                     changeOnSelect/>)}
                    </Item>
                    <Item label='图片上传'>
                        <PicturesWall ref={this.imgs} imgs={faculty.images}/>
                    </Item>
                    <Item label='ww'>
                        <Button type='primary' onClick={this.submit}>提交</Button>
                    </Item>
                </Form>
            </Card>
        )
    }
}
export default Form.create()(FacultysAddAndUpdate)


/**
 * 1.子组件调用父组件的方法：
 *      将父组件的方法以函属性的形式传递给子组件，子组件就可以调用
 * 2.父组件调用子组件的方法：
 *      父组件通过ref
 **/
