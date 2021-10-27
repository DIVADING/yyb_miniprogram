import React, { Component } from 'react'
import { Layout, Menu, } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import './login.less'
import {
    SmileFilled,
    EyeOutlined,
    InfoOutlined
} from '@ant-design/icons';
import logo from './images/logo.png'
import ajax from '../../api/ajax.js'
const Item = Form.Item;

export default class Login extends Component {
    formRef = React.createRef()

    handleSubmit = value => {
        console.log(value)
        ajax("http://192.168.1.119:8080/eggQuality/pageInit",{"clientId":590},"POST").then().catch((error)=>{
        })
    }
    onFinish = value => {
        this.formRef.current.resetFields();
    }
    render() {
        return (
            <div className="login">
                <header className='login-header'>
                    <img className='logo' src={logo} alt="logo" />

                </header>
                <section >
                    <div className='login-body'>
                        <h1>用户登录</h1>
                        <div className='login-body-content'>
                            <h2></h2>
                        </div>
                        <Form className='login-body-form' name='login' ref={this.formRef} onFinish={this.handleSubmit}>
                            <Form.Item name='username' className='login-body-form-item'
                                rules={[
                                    {
                                        required: true,
                                        message: "请输入用户名"
                                    },
                                ]}>
                                <Input
                                    prefix={<SmileFilled style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="用户名"
                                />
                            </Form.Item>
                            <Form.Item name='password' className='login-body-form-item'
                                rules={[
                                    {
                                        required: true,
                                        message: "请输入密码"
                                    },
                                ]}>
                                <Input
                                    prefix={<EyeOutlined type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="密码"
                                />
                            </Form.Item>
                            <Form.Item className='login-body-form-item'>
                                <Button className='login-body-form-item' type="primary" htmlType="submit">
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </section>
            </div>
        )
    }
}