import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { createProject } from "../../store/actions/projectActions";
import { connect } from "react-redux";

const FormItem = Form.Item;

class CreateProject extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
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
        this.props.createProject(values);
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
        <FormItem label={"Title"}>
          {getFieldDecorator("title", {
            rules: [{ required: true, message: "Please input your title!" }]
          })(
            <Input
              id="title"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Title"
              onChange={this.handleChange}
            />
          )}
        </FormItem>

        <FormItem label={"Content"}>
          {getFieldDecorator("content", {
            rules: [{ required: true, message: "Please input your content!" }]
          })(
            <Input.TextArea
              id="content"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              onChange={this.handleChange}
              placeholder="Content"
            />
          )}
        </FormItem>

        <FormItem>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Create
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createProject: project => dispatch(createProject(project))
});

export default Form.create()(
  connect(
    null,
    mapDispatchToProps
  )(CreateProject)
);
