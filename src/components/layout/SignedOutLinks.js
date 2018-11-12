import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const SignedOutLinks = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      style={{ lineHeight: "64px", float: "right" }}
    >
      <Menu.Item key="1">
        <Link to="/signup" className="brand-logo">
          Signup
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/signin" className="brand-logo">
          Login
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default SignedOutLinks;
