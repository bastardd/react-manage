import React,{Component} from 'react'
import { Form, Icon, Input, Button } from 'antd';

import './login.less'

/**
 * 登录的路由组建
 */
class Login extends Component {

    handleSubmit = e => {
        //阻止事件的默认行为
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('表单接收数据', values);
            }
        });
    };

    render () {
        const {getFieldDecorator} = this.props.form
        return (
            <div className="login">
                <section className="login-content">
                    <h1>云智库</h1>
                    <Form className="login-form" onSubmit={this.handleSubmit}>
                        <Form.Item>
                            {getFieldDecorator('account',{
                                rules:[{ required: true, message: '请输入用户名！'}],
                            })(
                                <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="用户名"
                                />
                             )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password',{
                                rules:[{ required: true, message: '请输入密码！'}],
                            })(<Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="密码"
                            />)}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}

/**
 * 高阶函数：参数接收一个函数，返回值也是函数；例如：定时器：setTimeOut/setInterval;getFieldDecorator()()
 * 高阶组件：本质是一个函数。接收一个组件，返回一个新的组件，包装组件会向被包装组件传入特定的属性；例如此时的aa
 *         作用：扩展组件功能，在这里，包装之后就可以验证组件，收集数据
 *         高阶组件也是高阶函数：接收一个组件函数，返回一个心的组件函数
 */
const aa = Form.create()(Login)
export default aa;
