import React from 'react'
import {Card,Icon,List} from 'antd'

const Item = List.Item
/**
 * 院系管理
 */
export default class FacultysDetail extends React.Component{
    render (){
        //读取携带的状态数据
        const {name,address} = this.props.location.state
        const title = (
            <span>
                <Icon type='arrow-left' style={{color : '#08979D',marginRight :15}}
                    onClick={() => this.props.history.goBack()}/>
                详情查看
            </span>
        )
        return (
            <Card title={title} className='faculty-detail'>
                <List>
                    <Item>
                        <span className='left'>名称</span>
                        <span>{name}</span>
                    </Item>
                    <Item>
                        <span className='left'>地址</span>
                        <span>{address}</span>
                    </Item>
                    <Item>
                        <span className='left'>描述</span>
                        <span dangerouslySetInnerHTML={{__html:'<h2 style="color: red">哈哈哈啊哈哈哈是的撒欢的foi文化肉味</h2>'}}></span>
                    </Item>
                </List>
            </Card>
        )
    }
}
