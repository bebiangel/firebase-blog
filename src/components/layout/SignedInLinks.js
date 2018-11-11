import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Avatar } from "antd";

const SignedInLinks = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      style={{ lineHeight: "64px", float: "right" }}
    >
      <Menu.Item key="1">
        <Link to="/" className="brand-logo">
          New Project
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/" className="brand-logo">
          LogOut
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Avatar size="large" />
      </Menu.Item>
    </Menu>
  );
};

export default SignedInLinks;
