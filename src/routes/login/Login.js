import React from 'react';
import styles from './Login.less';
import { connect } from 'dva';
import classNames from 'classnames';
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  Tabs,
  Spin
} from 'antd';

const FormItem = Form.Item;

class Login extends React.Component {
  handleFocus(trigger) {
    // var data = this.props.form.getFieldsValue();
    // console.log(data);
    this.props.dispatch({
      type: 'login/changeRotate',
      payload: trigger,
    })
  }
  login() {
    this.props.form.validateFields(['userName', 'password'], (err, values) => {
      if (!err) {
        let postData = {
          userName: values.userName,
          password: values.password,
        }
        this.props.dispatch({
          type: 'login/login',
          payload: postData,
        });
      }
    });
  }
  register() {
    this.props.form.validateFields(['userNameReg', 'passwordReg'], (err, values) => {
      if (!err) {
        let postData = {
          userName: values.userNameReg,
          password: values.passwordReg,
          ...values
        };
        this.props.dispatch({
          type: 'login/register',
          payload: postData,
        })
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { login } = this.props;
    const loginBoardClass = classNames({
      'loginBoard': true,
      'rightRotate': login.isRightRotate,
      'leftRotate': !login.isRightRotate,
    });
    const footerClass = classNames({
      'footer': true,
      'rightRotate': login.isRightRotate,
      'leftRotate': !login.isRightRotate,
    });
    return (
      <div className={styles.loginContent}>
        <div className={loginBoardClass}>
          <Spin spinning={login.isLoading}>
            <div className="login_title">
              <img className="login_logo" src="/src/assets/imgs/logo.png" width="100" alt="Despacito" />
              <span className="login_text">DESPACITO</span>
            </div>
            <div className="description">Despacito是西湖区最具影响力的 Web 设计规范</div>
            <div className="login_form">
              <Tabs defaultActiveKey="1" tabBarGutter={0}>
                <Tabs.TabPane tab="登陆" key="1">
                  <Form>
                    <FormItem>
                      {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入用户名' }],
                      })(
                        <Input
                          autoComplete="off"
                          onFocus={this.handleFocus.bind(this, 'username')}
                          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          placeholder="用户名"
                        />
                      )}

                    </FormItem>
                    <FormItem>
                      {getFieldDecorator('password', {
                        rules: [{ required: true, message: "密码长度6-16位", max: 16, min: 6 }]
                      })(
                        <Input
                          autoComplete="off"
                          onFocus={this.handleFocus.bind(this, 'password')}
                          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          type="password"
                          placeholder="密码"
                        />
                      )}
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator('rememberMe')(
                        <Checkbox><span className="login_form_remember">记住我</span></Checkbox>
                      )}
                      <a className="login_form_forgot" href="">忘了密码？</a>
                      <div>
                        <Button
                          type="primary"
                          htmlType="submit"
                          className="login_form_button"
                          onClick={this.login.bind(this)}
                        >
                          登陆
                      </Button>
                      </div>
                    </FormItem>
                  </Form>
                </Tabs.TabPane>
                <Tabs.TabPane tab="注册" key="2">
                  <Form>
                    <FormItem>
                      {getFieldDecorator('userNameReg', {
                        rules: [{ required: true, message: "请输入用户名" }]
                      })(
                        <Input
                          autoComplete="off"
                          onFocus={this.handleFocus.bind(this, 'username')}
                          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          placeholder="用户名"
                        />
                      )}
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator('passwordReg', {
                        rules: [{ required: true, message: "密码长度6-16位", max: 16, min: 6 }]
                      })(
                        <Input
                          autoComplete="off"
                          onFocus={this.handleFocus.bind(this, 'password')}
                          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          type="password"
                          placeholder="密码"
                        />
                      )}
                    </FormItem>
                    <FormItem>
                      <div>
                        <Button
                          type="primary"
                          htmlType="submit"
                          className="login_form_button"
                          onClick={this.register.bind(this)}
                        >
                          注册
                      </Button>
                      </div>
                    </FormItem>
                  </Form>
                </Tabs.TabPane>
              </Tabs>
            </div>
          </Spin>
        </div>
        <footer className={footerClass}>
          <span>
            Copyright<Icon type="copyright" />2018 Faruxue出品
          </span>
        </footer>
      </div>
    )
  }
};

export default connect(({ login }) => ({ login }))(Form.create()(Login));