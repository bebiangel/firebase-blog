import React, { Component } from "react";
import { firebase_login } from "./store/api";

class Login extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      password: ""
    };
  }

  handleSubmit = e => {
    //
    console.log(e);
    firebase_login({ email: this.state.id, pw: this.state.password });
    e.preventDefault();
    // alert(e.target.value);
  };

  handleChange = name => e => {
    //
    this.setState({
      [name]: e.target.value
    });
  };

  render() {
    //
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <span>ID</span>
            <input
              type=""
              value={this.state.id}
              onChange={this.handleChange("id")}
            />
          </div>
          <div>
            <span>password</span>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange("password")}
            />
          </div>
          <button type="submit">submit</button>
        </form>
      </>
    );
  }
}

export default Login;
