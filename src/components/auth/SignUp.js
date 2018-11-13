import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Form, Icon, Input, Button } from "antd";
import { signUp } from "../../store/actions/authActions";

const FormItem = Form.Item;

class SignUp extends Component {
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
        this.props.signUp(this.state);
      }
    });
  };

  render() {
    //
    const { getFieldDecorator } = this.props.form;
    const { auth } = this.props;

    if (auth.uid) return <Redirect to="/" />;

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
            Sign Up
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

const mapDispatchToProps = dispatch => ({
  signUp: newUser => dispatch(signUp(newUser))
});

export default Form.create()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignUp)
);
