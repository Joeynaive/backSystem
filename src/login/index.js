import React, { useState } from 'react';
import { Form, Input, Tabs, Checkbox, Button } from 'antd';
import './index.css';

const Login = () => {
  const [form] = Form.useForm();
  const [loginDisabled, setLoginDisabled] = useState(true);

  function onFinish() {
    form.validateFields().then(v => {
      console.log(v);
    })
  }

  async function onChange() {
    const values = await form.validateFields();
    console.log(values);
    const {mobile = '', password = '' } = values;
    if (mobile && password) {
      setLoginDisabled(false);
      return;
    }
    setLoginDisabled(true);
  }

  return (
    <Form form={form} onFinish={onFinish} onValuesChange={onChange}>
      <div className="login">
        <Form.Item><Tabs>
          <Tabs.TabPane tab="短信登录" key={1}><div>111</div>  </Tabs.TabPane>
          <Tabs.TabPane tab="密码登录" key={2}>
            <div className="login_password">
              <Form.Item name="mobile">
                <Input className="login_password-input" placeholder="手机号/邮箱"/>
              </Form.Item>
              <Form.Item name="password">
                <Input className="login_password-input" placeholder="密码"/>
              </Form.Item>
              <Form.Item>
                <Button className="login_password-btn" 
                  htmlType='submit' 
                  disabled={loginDisabled}
                >登录</Button>
              </Form.Item>
              <Form.Item className="login_password-form-footer">
                <Form.Item name="check" valuePropName="checked">
                  <Checkbox value={1}>下次自动登录</Checkbox>
                </Form.Item>
                <div className="login_password-form-footer-right">
                  <a href='' target="_blank">忘记密码</a>
                  &nbsp;｜&nbsp;
                  <a href='' target="_blank">注册</a>
                </div>
              </Form.Item>
              
            </div>
          </Tabs.TabPane>
        </Tabs></Form.Item>
      </div>
    </Form>
  )
}

export default Login