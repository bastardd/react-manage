import React from 'react'
import {Card,Button,Icon,Table,Divider,Modal} from 'antd'

import AddForm from './campus-add'
import UpdateForm from './campus-update'

/**
 * 校区管理
 */
export default class Campus extends React.Component{

    //将列表数据放在状态中，
    state = {
        categorys : [],//一级分类列表
        subCategorys: [],//子分类列表
        loading : false,//是否正在获取数据
        parentId: '0',//当前显示的分类列表的parentId
        parentName:'',//当前需要显示的分类名称
        showStatus : 0,//0，都不显示，1显示添加，2显示更新
    }

    /*初始化所有列的数组*/
    initColumns = () => {
        this.columns = [
            {
                title: '名称',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '操作',
                width:300,
                key: 'action',
                render: (record) => (
                    <span>
                        <a href="javascript:;" onClick={()=>this.showUpdate(record)}>修改分类</a>
                        <Divider type="vertical" />
                        {/*如何向事件回调函数传递参数，先定义一个匿名函数*/}
                        {this.state.parentId === '0' ?
                            <a href="javascript:;" onClick={() => this.showSubCategorys(record)}>查看子分类</a>
                            : null}

                    </span>
                ),
            },
        ];
    }

    /**
     * 显示一级分类列表
     */
    showFirstCategorys = () => {
        //更新为显示一级列表的状态
        this.setState({
            parentId : '0',
            parentName : '',
            subCategorys : []
        })
    }
    /**
     *显示指定一级分类的二级列表
     * @param record
     */
    showSubCategorys = (record) => {
        //更新状态,是一个异步更新的操作
        this.setState({
            parentId : record.key,
            parentName : record.name
        },() => { //在状态更新且重新render后执行
            //获取二级分类列表显示
            this.getCategorys()
        })
        //在setState之后不能立即获取最新的状态：因为setState是异步更新的，所有我们看了api之后，我们把数据获取放在回调函数中
    }

    /*异步获取一级或者二级分类列表数据*/
    getCategorys = (parentId) => {
        //在发请求前，显示loadding
        this.setState({loading : true})
        //如果传了参数parentId,则根据此时参数
        parentId = parentId || this.state.parentId
        // 模拟请求数据
        const dataSource = [
            {
                key: '1',
                name: '服装',
            },
            {
                key: '2',
                name: '玩具',
            },
            {
                key: '3',
                name: '家用电器',
            },
            {
                key: '4',
                name: '图书',
            },
            {
                key: '5',
                name: '食品',
            },
        ];
        //更新一级分类
        if (parentId === '0'){
            this.setState({
                categorys : dataSource,
            })
        }else {
            this.setState({
                subCategorys : dataSource,
            })
        }
        this.setState({loading : false})
    }

    /**
     * 响应取消
     */
    handleCancel = () =>{
        //清空form表单
        this.form.resetFields()
        this.setState({
            showStatus : 0
        })

    }

    /**
     * 显示添加的确认框
     */
    showAdd = () => {
        this.setState({
            showStatus : 1
        })
    }
    /**
     * 添加分类
     */
    addCategory = () => {
        this.form.validateFields((err,values)=>{
            if (!err){
                this.setState({
                    showStatus : 0
                })
                //收集数据，提交添加分类的请求
                const {parentId,categoryName} = values
                //清空form表单
                this.form.resetFields()
                console.log('新数据',parentId + '----'+categoryName)
                //重新获取分类列表显示
                //添加的分类就是当前分类下的分类
                if (parentId === this.state.parentId) {
                    this.getCategorys()
                }else if (parentId === '0'){    //在二级分类列表下添加一级分类，重新获取一级分类列表，但是此时不需要显示一级分类列表
                    this.getCategorys('0')
                }
            }
        })
    }

    showUpdate = (category) => {
        this.setState({
            showStatus : 2
        })
        //将当前数据存为临时数据，可以复用
        this.category = category
    }
    /**
     * 更新
     */
    updateCategory = () => {
        this.form.validateFields((err,values)=>{
            if (!err){
                this.setState({
                    showStatus : 0
                })
                //准备数据
                const {categoryName} = values;
                console.log('原数据：',this.category)
                console.log('更新数据：',categoryName)
                //发请求更新

                //重新显示列表
                this.getCategorys()
                //清空form表单
                this.form.resetFields()
            }
        })
    }

    /*为第一次render准备数据*/
    componentWillMount () {
        this.initColumns();
    }

    /*发异步ajax请求*/
    componentDidMount () {
        //获取一级分类
        this.getCategorys()
    }

    render (){
        //读取状态数据
        const {categorys,subCategorys,parentId,parentName,showStatus} = this.state
        //读取指定的分类
        let categoryName = ''
        if (this.category) {
            categoryName = this.category.name
        }
        const title = parentId === '0' ? '一级分类列表':
            (<span>
                <a onClick={this.showFirstCategorys}>一级分类列表</a>
                <Icon type='arrow-right'/>
                <span>{parentName}</span>
            </span>)
        const extra = (
            <Button type='primary' onClick={this.showAdd}>
                <Icon type='plus'/>
                添加
            </Button>
        )


        return (
            <Card title={title} extra={extra}>
                <Table
                    dataSource={parentId ==='0' ? categorys : subCategorys}
                    columns={this.columns}
                    bordered
                    rowKey='key'
                    loading={this.loading}
                    pagination={{
                        current : this.pageNum,
                        defaultPageSize : 5,
                        showQuickJumper : true,
                        pageSizeOptions : 5}}/>
                <Modal
                    title="添加"
                    visible={showStatus === 1}
                    onOk={this.addCategory}
                    onCancel={this.handleCancel}
                >
                    <AddForm categorys={categorys} parentId={parentId}
                             setForm={(form) => {this.form = form}}/>
                </Modal>
                <Modal
                    title="修改"
                    visible={showStatus === 2}
                    onOk={this.updateCategory}
                    onCancel={this.handleCancel}
                >
                    <UpdateForm categoryName={categoryName}
                                setForm={(form) => {this.form = form}}/>
                </Modal>
            </Card>
        )
    }
}

/**
 * <UpdateForm categoryName={categoryName}
        setForm={(form) => {this.form = form}}/>
 解释：setForm={(form) => {this.form = form}}
    (form)是函数接收过来的参数，要将经常使用的话，就可以存起来，所以{this.form = form}
 */
