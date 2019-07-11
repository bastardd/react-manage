import React from 'react'
import {Card,Select,Input,Button,Icon,Table,Divider} from 'antd'
import {facultysListdataSource} from "../../utils/staticDatas";

import {PAGE_SIZE} from '../../utils/constants'

const Option = Select.Option
/**
 * 院系管理
 */
export default class FacultysHome extends React.Component{

    state = {
        total : 0,//总条数
        facultys : facultysListdataSource,
        loading : false,
        searchName : '',    //搜索的关键字
        searchType : 'name'      //根据哪个字段
    }

    initColumns = () => {
        this.columns = [
            {
                title: '院系名称',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '负责人',
                dataIndex: 'manage',
                key: 'manage',
            },
            {
                title: '地址',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title : '操作',
                width : 200,
                render: (record) => (
                        <span>
                            <a href='javascript:;'
                               onClick={() => this.props.history.push('/facultys/detail',record)}>详情</a>
                            <Divider type="vertical"/>
                            <a href='javascript:;'
                                onClick={() => this.props.history.push('/facultys/addAndUpdate',record)}>修改</a>
                        </span>
                   )
            }
        ];
    }

    //一般分页请求和搜索分页请求
    getFacultyList = (pageNum) => {
        this.pageNum = pageNum  //保存当前页数，保证其他的方法可以用到
        this.setState({loading:true});
        const {searchName,searchType}  = this.state
        let result
        if (searchName){
            //进行搜索分页
            //发送请求，获取数据
            //reqSearch({pageNum,pageSize,searchName,searchType})
        } else {
            //一般分页
            //发送请求，获取数据
        }
        this.setState({loading:false});
        // 更新total,facultys
        /*if (result.code === 0){
            //取出分页，更新状态，显示分页列表
            const {total,list} = result.data
            this.setState({
                total,
                facultys:list
            })
        }*/
    }

    componentWillMount (){
        this.initColumns()
    }

    componentDidMount (){
        //默认获取第一页数据
        this.getFacultyList(1)
    }

    render (){
        const {facultys,total,loading,searchType,searchName} = this.state
        const title = (
            <span>
                <Select value={searchType} style={{width : 150}}
                        onChange={value => this.setState({searchType:value})}>
                    <Option value='name'>按名称搜索</Option>
                    <Option value='disc'>按描述搜索</Option>
                </Select>
                <Input placeholder='关键字' style={{width : 150,margin : '0 15px'}}
                       value={searchName}
                       onChange={event => this.setState({searchName:event.target.value})}/>
                <Button type='primary' onClick={() => {this.getFacultyList(1)}}>搜索</Button>
            </span>
        )
        const extra = (
            <Button type='primary' onClick={() => this.props.history.push('/facultys/addAndUpdate')}>
                <Icon type='plus'/>
                添加
            </Button>
        )
        return (
            <Card title={title} extra={extra}>
                <Table dataSource={facultys}
                       columns={this.columns}
                       bordered
                       rowKey='id'
                       loading={loading}
                       pagination={
                           {
                               current : this.pageNum,
                               total : total,
                               defaultPageSize : PAGE_SIZE,
                               showQuickJumper :true,
                               onChange : (pageNum) => {
                                   this.getFacultyList(pageNum)
                               }
                           }
                        }/>
            </Card>
        )
    }
}
