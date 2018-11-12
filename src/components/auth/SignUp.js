import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";

const FormItem = Form.Item;

class SignIn extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    //
    const { getFieldDecorator } = this.props.form;

    return (
      <Form
        onSubmit={this.handleSubmit}
        style={{ width: "400px", marginLeft: "auto", marginRight: "auto" }}
      >
        <FormItem>
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              id="email"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email"
            />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              id="password"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator("firstName", {
            rules: [
              { required: true, message: "Please input your First Name!" }
            ]
          })(
            <Input
              id="firstName"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="First Name"
            />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator("lastName", {
            rules: [{ required: true, message: "Please input your Last Name!" }]
          })(
            <Input
              id="lastName"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Last Name"
            />
          )}
        </FormItem>

        <FormItem>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(SignIn);
