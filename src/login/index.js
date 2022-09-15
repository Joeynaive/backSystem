import React, { useState } from 'react';
import { Form, Input, Radio, CheckBox, Button } from 'antd';
import './index.css';

const Login = () => {
  const [form] = Form.useForm();
  const [loginType, setLoginType] = useState(1);

  function onFinish() {

  }

  function changeLoginType(e) {
    setLoginType(e.target.value)
  }

  return (
    <Form form={form} onFinish={onFinish}>
      <div className="login">
        <Form.Item><Radio.Group onChange={changeLoginType} value={loginType}>
          <Radio.Button value={1}>短信登录</Radio.Button>
          <Radio.Button value={2}>密码登录</Radio.Button>
        </Radio.Group></Form.Item>
        {loginType === 1 && (
          <div>111</div>  
        )}
        {loginType === 2 && (
          <div>222</div>
        )}
      </div>
    </Form>
  )
}

export default Login