import React from 'react'
import {Card,Table,Button,Icon,Form,Input,Row,
    Col,Select,InputNumber,DatePicker,Modal,
    Divider} from 'antd'

import AddFormSchool from './school-add'
import './school.less'
import {schoolListdataSource} from "../../utils/staticDatas";

const { Option } = Select;

/**
 * 学校管理
 */
class School extends React.Component{
    state = {
        selectedRowKeys : [],
        formValues : {},
        expandForm : false,
        visible : false,
        title : '',
        chooseItem : {},
        schoolLists : null
    }

    showModal = (title,item) => {
        this.setState({
            visible: true,
            title:title,
            chooseItem:item
        });
        if (null != item) {
            console.log(item)
        }

    };

    addForm = e => {
        //进行提交操作
        console.log(e);
        //隐藏确认框
        this.setState({
            visible: false,
        });
        //发送提交请求更新
        //获取子组件的数据
        const schoolName = this.form.getFieldValue('schoolName')
        const schoolAddress = this.form.getFieldValue('schoolAddress')
        const id = this.form.getFieldValue('id')
        console.log('id : ' + id +',schoolName----',schoolName + ',schoolAddress----',schoolAddress)
        //重新刷新列表
        // this.getSchoolList();
        //清除表单输入数据
        this.form.resetFields()
    };

    handleCancel = () => {
        this.form.resetFields()
        this.setState({
            visible: false,
        });
    };

    handleSearch = e => {
        e.preventDefault();
        const { form } = this.props;
        form.validateFields((err, fieldsValue) => {
            if (err) return;
            const values = {
                ...fieldsValue,
                updatedAt: fieldsValue.updatedAt && fieldsValue.updatedAt.valueOf(),
            };
            this.setState({
                formValues: values,
            });
        });
    };

    handleFormReset = () => {
        const { form } = this.props;
        form.resetFields();
        this.setState({
            formValues: {},
        });
    };

    toggleForm = () => {
        const { expandForm } = this.state;
        this.setState({
            expandForm: !expandForm,
        });
    };

    onSelectChange = selectedRowKeys => {
        if (selectedRowKeys){
            console.log('selectedRowKeys changed: ', selectedRowKeys);
            this.setState({ selectedRowKeys });
        }
    };

    renderAdvancedForm = () => {
        const { getFieldDecorator }= this.props.form;
        return (
            <Form onSubmit={this.handleSearch} layout="inline">
                <Row gutter={{ md: 4, lg: 24, xl: 48 }}>
                    <Col md={8} sm={24}>
                        <Form.Item label="规则名称">
                            {getFieldDecorator('name')(<Input placeholder="请输入" />)}
                        </Form.Item>
                    </Col>
                    <Col md={8} sm={24}>
                        <Form.Item label="使用状态">
                            {getFieldDecorator('status')(
                                <Select placeholder="请选择" style={{ width: '100px' }}>
                                    <Option value="0">关闭</Option>
                                    <Option value="1">运行中</Option>
                                </Select>
                            )}
                        </Form.Item>
                    </Col>
                    <Col md={8} sm={24}>
                        <Form.Item label="调用次数">
                            {getFieldDecorator('number')(<InputNumber style={{ width: '100px' }} />)}
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                    <Col md={8} sm={24}>
                        <Form.Item label="更新日期">
                            {getFieldDecorator('date')(
                                <DatePicker style={{ width: '100%' }} placeholder="请输入更新日期" />
                            )}
                        </Form.Item>
                    </Col>
                    <Col md={8} sm={24}>
                        <Form.Item label="使用状态">
                            {getFieldDecorator('status3')(
                                <Select placeholder="请选择" style={{ width: '100px' }}>
                                    <Option value="0">关闭</Option>
                                    <Option value="1">运行中</Option>
                                </Select>
                            )}
                        </Form.Item>
                    </Col>
                    <Col md={8} sm={24}>
                        <Form.Item label="使用状态">
                            {getFieldDecorator('status4')(
                                <Select placeholder="请选择" style={{ width: '100px' }}>
                                    <Option value="0">关闭</Option>
                                    <Option value="1">运行中</Option>
                                </Select>
                            )}
                        </Form.Item>
                    </Col>
                </Row>
                <div className='card-form-foot'>
                    <div className='card-form-foot-button'>
                        <Button type="primary" htmlType="submit">
                            查询
                        </Button>
                        <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
                            重置
                        </Button>
                        <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                            收起 <Icon type="up" />
                        </a>
                    </div>
                </div>
            </Form>
        );
    }

    renderSimpleForm() {
        const {
            form: { getFieldDecorator },
        } = this.props;
        return (
            <Form onSubmit={this.handleSearch} layout="inline">
                <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                    <Col md={8} sm={24}>
                        <Form.Item label="规则名称">
                            {getFieldDecorator('name')(<Input placeholder="请输入" />)}
                        </Form.Item>
                    </Col>
                    <Col md={8} sm={24}>
                        <Form.Item label="使用状态">
                            {getFieldDecorator('status')(
                                <Select placeholder="请选择" style={{ width: '100px' }}>
                                    <Option value="0">关闭</Option>
                                    <Option value="1">运行中</Option>
                                </Select>
                            )}
                        </Form.Item>
                    </Col>
                    <Col md={8} sm={24}>
                        <span className='submitButtons'>
                          <Button type="primary" htmlType="submit">
                            查询
                          </Button>
                          <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
                            重置
                          </Button>
                          <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                            展开 <Icon type="down" />
                          </a>
                        </span>
                    </Col>
                </Row>
            </Form>
        );
    }

    renderForm() {
        const { expandForm } = this.state;
        return expandForm ? this.renderAdvancedForm() : this.renderSimpleForm();
    }

    componentDidMount(){
        this.state.schoolLists = schoolListdataSource
    }

    render (){
        const dataSource = this.state.schoolLists;
        const columns = [
            {
                title: '学校',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '地址',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <a href="javascript:;" onClick={() => this.showModal('编辑',record)}>编辑</a>
                        <Divider type="vertical" />
                        <a href="javascript:;">删除</a>
                      </span>
                                ),
            }
        ];
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        return (
            <div>
                <Card title='学校列表'>
                    <div className='card-form'>{this.renderForm()}</div>
                    <div style={{ marginBottom: 16 }}>
                        <Button type='primary' onClick={() => this.showModal('添加',null)}><Icon type='plus'/>添加</Button>&nbsp;&nbsp;
                        <Modal
                            title={this.state.title}
                            visible={this.state.visible}
                            onOk = {this.addForm}
                            onCancel={this.handleCancel}
                            okText='确定'
                            cancelText='取消'
                        >
                            <AddFormSchool chooseItem={this.state.chooseItem} setForm={(form)=>{this.form=form}}/>
                        </Modal>
                        <Button type='default'><Icon type='delete'/>删除</Button>
                    </div>
                    <Table dataSource={dataSource} columns={columns}
                           bordered={true} rowSelection={rowSelection}/>
                </Card>
            </div>
        )
    }
}

const aa = Form.create()(School)
export default aa;
