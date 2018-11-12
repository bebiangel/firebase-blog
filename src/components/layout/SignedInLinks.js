import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

import { Menu, Avatar } from "antd";

const SignedInLinks = props => {
  //
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      style={{ lineHeight: "64px", float: "right" }}
    >
      <Menu.Item key="1">
        <Link to="/create" className="brand-logo">
          New Project
        </Link>
      </Menu.Item>
      <Menu.Item key="2" onClick={() => props.signOut()}>
        <Link to="/" className="brand-logo">
          LogOut
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Avatar size="large">NN</Avatar>
      </Menu.Item>
    </Menu>
  );
};

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
