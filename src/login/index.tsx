import React, { useState, useEffect } from 'react';
import { Form, Input, Tabs, Checkbox, Button, Radio } from 'antd';
import './index.less';

const Login = () => {
  const [form] = Form.useForm();
  const [loginDisabled, setLoginDisabled] = useState(true);

  function onFinish() {
    form.validateFields().then(v => {
      console.log(v);
    });
  }

  useEffect( () => {
  }); 

  async function onChange() {
    const values = await form.validateFields();
    console.log(values);
    const { mobile = '', password = '' } = values;
    if (mobile && password) {
      setLoginDisabled(false);
      return;
    }
    setLoginDisabled(true);
  }

  return (
    <>
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
                    htmlType="submit" 
                    disabled={loginDisabled}
                  >登录</Button>
                </Form.Item>
                <Form.Item className="login_password-form-footer">
                  <Form.Item name="check" valuePropName="checked">
                    <Checkbox value={1}>下次自动登录</Checkbox>
                  </Form.Item>
                  <div className="login_password-form-footer-right">
                    <a href="" target="_blank">忘记密码</a>
                    &nbsp;｜&nbsp;
                    <a href="" target="_blank">注册</a>
                  </div>
                </Form.Item>
                <div className="login-other">
                  <div className="login-other-title">第三方账号登录</div>
                  <div className="login-other-icon">
                    <div className="login-other-icon-box">
                      <img src="/src/img/qq.png"></img>
                    </div>
                    <div className="login-other-icon-box">
                      <img src="/src/img/wechat.png"></img>
                    </div>
                    <div className="login-other-icon-box">
                      <img src="/src/img/weibo.png"></img>
                    </div>
                  </div>
                </div>
                <div className="login-info">
                  <div>登录或注册即代表同意
                    &nbsp;<a href="" target="_blank">用户协议</a>&nbsp;和
                    &nbsp;<a href="" target="_blank">隐私政策</a>
                  </div>
                  <div>未满18周岁未成年人请勿自行注册，其注册、登录账号及使用服务需征得监护人同意</div>
                </div>
              </div>
            </Tabs.TabPane>
          </Tabs></Form.Item>
        </div>
      </Form>
    </>
  );
};

export default Login;
