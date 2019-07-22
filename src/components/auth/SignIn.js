import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {Button, Form, Icon, Input} from "antd";
import {signIn} from "../../store/actions/authActions";

const FormItem = Form.Item;

class SignUp extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    //
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.signIn(this.state);
      }
    });
  };

  render() {
    //
    const { getFieldDecorator } = this.props.form;
    const { authError, auth } = this.props;

    if (auth.uid) return <Redirect to="/" />;

    return (
      <Form
        onSubmit={this.handleSubmit}
        style={{ width: "400px", marginLeft: "auto", marginRight: "auto" }}
      >
        <FormItem>
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Please input your Email!" }]
          })(
            <Input
              id="email"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email"
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            />
          )}
        </FormItem>

        <FormItem>
          {/*  {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a style={{ float: "right" }} href="">
            Forgot password
          </a>
        */}
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Log in
          </Button>
        </FormItem>
        {authError && <p>{authError}</p>}
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  authError: state.auth.authError
});

const mapDispatchToProps = dispatch => ({
  signIn: cred => dispatch(signIn(cred))
});

export default Form.create()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignUp)
);
