import React from 'react'
import {Form,Tree,Input} from 'antd'
import PropTypes from 'prop-types'
import menuList from "../../config/menuConfig";

const {TreeNode } = Tree
const {Item} = Form

export default class RoleAuth extends React.Component{

    static propTypes = {
        role : PropTypes.object
    }

    constructor(props) {
        super(props);

        let menus = this.props.role
        menus = ['/home','/school']
        this.state = {
            menuList : menuList,
            checkedKeys : menus
        }
    }

    getMenus = () => this.state.checkedKeys

    onCheck = checkedKeys => {
        console.log('onCheck', checkedKeys);
        this.setState({ checkedKeys });
    };


    initTree = (menuList) => {
        //map或者reduce都可以
       return menuList.reduce((pre,item) => {
           pre.push(
               <TreeNode key={item.key} title={item.title}>
                   {item.children ? this.initTree(item.children) : null}
               </TreeNode>
               )
           return pre
       },[])
    }

    componentWillMount(){
        this.treeNode = this.initTree(this.state.menuList)
    }

    //根据新传入props属性时，自动调用，在render之前调用
    componentWillReceiveProps (nextProps){
        const menus = nextProps.role.menus
        this.setState({
            checkedKeys : menus
        })
    }

    render (){
        const {role} = this.props
        const {checkedKeys} = this.state
        const formItemLayout = {
            labelCol : { span : 4},
            wrapperCol : { span: 20}
        }
        return (
            <div>
                <Item label='角色名称' {...formItemLayout}>
                    <Input value={role.roleName} disabled/>
                </Item>
                <Tree checkable
                      checkedKeys={checkedKeys}
                      onCheck={this.onCheck}
                      // defaultExpandAll={true}
                >
                    {this.treeNode}
                </Tree>
            </div>
        )
    }
}
